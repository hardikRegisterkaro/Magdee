import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.headers.get("x-revalidate-secret");

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ success: false, message: "Invalid secret" }, { status: 401 });
  }

  try {
    const { tags } = await req.json();

    if (!Array.isArray(tags) || tags.length === 0) {
      return NextResponse.json({ success: false, message: "tags array required" }, { status: 400 });
    }

    for (const tag of tags) {
      revalidateTag(tag, "max");
    }

    return NextResponse.json({ success: true, revalidated: tags });
  } catch {
    return NextResponse.json({ success: false, message: "Failed to revalidate" }, { status: 500 });
  }
}
