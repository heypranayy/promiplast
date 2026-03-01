import { NextRequest, NextResponse } from "next/server";
import { states } from "../../states/states";
import path from "path";
import fs from "fs";
import { ApiResponse } from "@/utils/ApiResponse";

export async function GET(
  request: NextRequest,
  { params }: { params: { downloadid: string } }
) {
    
  if (!params.downloadid)
    return NextResponse.json(ApiResponse(404, "Download id is required"), {
      status: 404,
    });

  if (!states.has(params.downloadid))
    return NextResponse.json(
      ApiResponse(404, "This is not a valid Download id"),
      {
        status: 404,
      }
    );

  states.delete(params.downloadid);

  try {
    const filePath = path.resolve(".", "Promiplast-Products.pdf");
    const fileContents = await fs.readFileSync(filePath);

    const response = new NextResponse(fileContents, {
      headers: {
        "Content-Disposition": 'attachment; filename="Promiplast-Products.pdf"',
        "Content-Type": "application/pdf",
      },
    });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
