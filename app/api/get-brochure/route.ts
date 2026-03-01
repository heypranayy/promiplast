import { NextResponse, NextRequest } from "next/server";
import { states } from "../states/states";
import uniqid from "uniqid";
import { sendMail } from "@/utils/sendMail";
import { ApiResponse } from "@/utils/ApiResponse";

interface Body {
  "first-name": string;
  "last-name": string;
  email: string;
  number: string;
}

export async function POST(request: NextRequest) {
  const body: Body = await request.json();

  if (!body["first-name"])
    return NextResponse.json(ApiResponse(404, "first name is required"), {
      status: 404,
    });

  if (!body["last-name"])
    return NextResponse.json(ApiResponse(404, "last name is required"), {
      status: 404,
    });

  if (!body.email)
    return NextResponse.json(ApiResponse(404, "email is required"), {
      status: 404,
    });

  if (!body.email.includes("@"))
    return NextResponse.json(ApiResponse(404, "enter a valid email address"), {
      status: 404,
    });

  if (!body.number)
    return NextResponse.json(ApiResponse(404, "email is required"), {
      status: 404,
    });

  if (body.number.length !== 10)
    return NextResponse.json(ApiResponse(404, "Enter a valid mobile number"), {
      status: 404,
    });

  try {
    const { response: res } = await sendMail<string, Error>({
      Name: body["first-name"] + " " + body["last-name"],
      Email: body.email,
      Number: body.number,
    });
    const id = uniqid();
    states.set(id, true);
    return NextResponse.json(
      ApiResponse(200, "Download Url Has Generated", id),
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      ApiResponse(200, "Error occurs while sending your details"),
      { status: 500 }
    );
  }
}
