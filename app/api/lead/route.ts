import { NextResponse } from "next/server";

const GHL_WEBHOOK =
  "https://services.leadconnectorhq.com/hooks/3GUJTgyZVEraW2DSelmS/webhook-trigger/b1d58b4b-a67c-41fd-ab75-dd72b7dcd69b";

export async function POST(req: Request) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const { name, phone, email, address, propertyType, message } = body;

  if (!name || !phone || !email || !address) {
    return NextResponse.json(
      { success: false, error: "missing_fields" },
      { status: 400 }
    );
  }

  const nameParts = name.trim().split(/\s+/);
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ") || "";

  const payload = {
    firstName,
    lastName,
    phone,
    email,
    address1: address,
    tags: ["website-lead", "property-tax-protest"],
    source: "Property Tax Relief Group Website",
    customField: {
      property_type: propertyType,
      notes: message,
    },
  };

  try {
    const response = await fetch(GHL_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error("GHL webhook failed:", response.status, await response.text());
      return NextResponse.json({ success: false }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("GHL webhook error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
