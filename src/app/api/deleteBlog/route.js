const fs = require("fs");
const path = require('path');
import { NextResponse } from "next/server";
import imageData from "@/app/imageData.json"

const publicImagesFolderPath = path.join(process.cwd(), 'public', 'images');

function deleteImagesByNames(imageNames) {
    imageNames.forEach(imageName => {
        const imagePath = path.join(publicImagesFolderPath, imageName);

        fs.unlink(imagePath, (err) => {
            if (err) {
                console.error(`Error deleting image ${imageName}:`, err);
                return;
            }
            console.log(`Image ${imageName} deleted successfully.`);
        });
    });
}

export async function GET(request) {
    let blogId = request.nextUrl.searchParams.get("blogId");
    let images = imageData[blogId].images;
    console.log(images)
    delete imageData[blogId]
    fs.writeFile("src/app/imageData.json", JSON.stringify(imageData), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return NextResponse.json({ messages: "data not saved", success: false });
      }
      console.log("Data written to file successfully.");
    });
    deleteImagesByNames(images)
  return NextResponse.json({ success: true }, { status: 200 });
}