import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const APPSCRIPT_URL = process.env.NEXT_PUBLIC_APPSCRIPT_URL;

  if (!APPSCRIPT_URL || APPSCRIPT_URL === "YOUR_APPS_SCRIPT_URL_HERE") {
    return NextResponse.json({ success: true, message: "Dev Mode: Success logged to console (check Next.js terminal)" }, { status: 200 });
  }

  try {
    const data = await req.json();
    
    const response = await fetch(APPSCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      // Important for Apps Script: no CORS required for server-to-server
    });

    if (!response.ok) {
        throw new Error("Apps Script response not ok");
    }

    return NextResponse.json({ success: true, message: "Lead captured and saved to Google Sheets." });
  } catch (error: any) {
    console.error("API POST Error:", error);
    return NextResponse.json({ success: false, message: "Submission failed. Please try WhatsApp." }, { status: 500 });
  }
}
