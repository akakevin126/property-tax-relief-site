import { NextResponse } from "next/server";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/3GUJTgyZVEraW2DSeImS/webhook-trigger/b1d58b4b-a67c-41fd-ab75-dd72b7dcd69b";

export async function POST(req: Request) {
  console.log("[lead] API route hit");

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch (err) {
    console.error("[lead] invalid json:", err);
    return NextResponse.json(
      { success: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  console.log("[lead] raw body received:", body);

  const { name, phone, email, address, propertyType, message, referredBy } =
    body;

  if (!name || !phone || !email || !address) {
    console.warn("[lead] missing fields:", { name, phone, email, address });
    return NextResponse.json(
      { success: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || "";
  const fullName = `${firstName}${lastName ? " " + lastName : ""}`;

  // Send both snake_case and camelCase top-level fields so the GHL workflow's
  // Create Contact action can reference whichever convention it was mapped to.
  // Custom fields are also flattened to the top level for the same reason.
  const payload = {
    // names
    first_name: firstName,
    firstName,
    last_name: lastName,
    lastName,
    full_name: fullName,
    name: fullName,

    // contact channels
    phone,
    email,

    // address
    address1: address,
    address: address,

    // extras (top-level so mappings don't need to traverse nested objects)
    property_type: propertyType,
    propertyType,
    notes: message,
    message,
    referred_by: referredBy || "",
    referredBy: referredBy || "",

    // routing
    tags: ["website-lead", "property-tax-protest"],
    source: "Property Tax Relief Group Website",

    // GHL custom fields are referenced by dotted keys like "contact.<key>"
    customField: {
      "contact.referred_by": referredBy || "",
      "contact.property_type": propertyType,
      "contact.notes": message,
    },
  };

  console.log("[lead] payload to GHL:", JSON.stringify(payload));
  console.log("[lead] webhook URL:", GHL_WEBHOOK);

  try {
    const response = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const respText = await response.text();
    console.log("[lead] GHL status:", response.status);
    console.log("[lead] GHL response body:", respText);

    // GHL returns HTTP 200 even on rejection — the real error lives in the
    // response body's "status" field. Parse and treat that as failure too.
    let ghlAccepted = response.ok;
    if (ghlAccepted && respText) {
      try {
        const parsed = JSON.parse(respText);
        if (
          typeof parsed?.status === "string" &&
          parsed.status.toLowerCase().startsWith("error")
        ) {
          console.error("[lead] GHL rejected payload:", parsed.status);
          ghlAccepted = false;
        }
      } catch {
        // non-JSON body — leave ghlAccepted as response.ok
      }
    }

    if (!ghlAccepted) {
      return NextResponse.json(
        { success: false, error: "ghl_rejected", detail: respText },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[lead] fetch threw:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
