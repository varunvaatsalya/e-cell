const fs = require("fs");
import { NextResponse } from "next/server";

// export function GET(Request) {
//   let Data = fs.readFileSync("src/app/data2.json");
//   Data = JSON.parse(Data);
//   return NextResponse.json(Data, { status: 200 });
// }

export async function POST(Request) {
  let payload = await Request.json();
  const updatedJsonData = JSON.stringify(payload);
  fs.writeFile("src/app/data2.json", updatedJsonData, function (err) {
    if (err) console.log(err);
  });

  return NextResponse.json({ success: true }, { status: 200 });
}
