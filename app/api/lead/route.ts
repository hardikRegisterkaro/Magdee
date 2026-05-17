import { NextRequest, NextResponse } from "next/server";

const CMS_URL = process.env.BACKEND_API_URL || "http://localhost:3000";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch(`${CMS_URL}/api/lead`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });

        const data = await res.json();
        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("Contact lead proxy error:", error);
        return NextResponse.json(
            { success: false, message: "Failed to submit. Please try again." },
            { status: 500 }
        );
    }
}
