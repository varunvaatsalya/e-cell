import { NextResponse } from "next/server";
import { cookies } from "next/headers";
const fs = require("fs");

export async function POST(req) {
  let payload = await req.json();
  let websitePassword = process.env.WEBSITE_PASSWORD;
  if (payload.password == websitePassword) {
    cookies().set({
      name: "uid",
      value: websitePassword,
      path: "/admin",
    });
    fs.appendFile(
      "login.txt",
      `${Date.now()}:${payload.email}\n`,
      (err, data) => {
        if (err) console.log(err);
      }
    );
    return NextResponse.json({ messages: "data saved", success: true });
  }
  return NextResponse.json({ messages: "data not saved", success: false });
}
