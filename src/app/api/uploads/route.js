const fs = require("fs");
import { NextResponse } from "next/server";
import imageData from "../../imageData.json";

function generateUniquePhotoName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  const uniqueName = `Image_${timestamp}_${randomString}.png`;
  return uniqueName;
}

function handleAddAndUpdateImageData(data, imageArray) {
  const timestamp = new Date().getTime();
  data.images = imageArray;
  imageData[timestamp] = data;
  const dataArray = Object.entries(imageData);
  dataArray.sort((a, b) => new Date(b[1].date) - new Date(a[1].date));
  const sortedJsonData = Object.fromEntries(dataArray);
  const sortedJsonString = JSON.stringify(sortedJsonData, null, 2);
  fs.writeFile("src/app/imageData.json", sortedJsonString, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return NextResponse.json({ messages: "data not saved", success: false });
    }
    console.log("Data written to file successfully.");
  });
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });
}

export async function POST(req) {
  let Data = await req.formData();
  let data = Data.get("data");
  data = JSON.parse(data);
  data.date = formatDate(data.date)
  const imageArray = [];
  const imageNameArray = [];

  Data.forEach((value, key) => {
    if (key.startsWith("image")) {
      imageArray.push(value);
    }
  });

  imageArray.forEach(async (value, key) => {
    const byteData = await value.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const fileName = generateUniquePhotoName();
    imageNameArray.push(fileName);
    const path = `./public/images/${fileName}`;
    await fs.writeFile(path, buffer, function (err) {
      if (err) console.log(err);
    });
    if (key + 1 === imageArray.length) {
      handleAddAndUpdateImageData(data, imageNameArray);
    }
  });

  return NextResponse.json({ messages: "data found", success: true });
}
