const fs = require("fs");
const path = require("path");
import { NextResponse } from "next/server";
import Imagedata from "@/app/imageData.json";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
}

function generateUniquePhotoName() {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 8);
  const uniqueName = `Image_${timestamp}_${randomString}.png`;
  return uniqueName;
}
const publicImagesFolderPath = path.join(process.cwd(), "public", "images");

function handleDeletePhoto(imageName) {
  const imagePath = path.join(publicImagesFolderPath, imageName);

  fs.unlink(imagePath, (err) => {
    if (err) {
      console.error(`Error deleting image ${imageName}:`, err);
      return;
    }
    console.log(`Image ${imageName} deleted successfully.`);
  });
}

function handleAddAndUpdateImageData(blogId, data, currentBlogImageNameArray) {
  data.images = currentBlogImageNameArray;
  Imagedata[blogId] = data;
  const dataArray = Object.entries(Imagedata);
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

export async function POST(req) {
  let Data = await req.formData();
  let data = Data.get("data");
  let blogId = Data.get("blogId");
  console.log(data, blogId)
  data = JSON.parse(data);
  data.date = formatDate(data.date);
  let currentBlogImageNameArray = data.images;
  const imageArray = [];

  Data.forEach((value, key) => {
    if (key.startsWith("image")) {
      imageArray.push({ value, key });
    }
  });

  Imagedata[blogId].images.forEach(oldImageName => {
    if (!currentBlogImageNameArray.includes(oldImageName)) {
        handleDeletePhoto(oldImageName);
    }
});

  if (!imageArray.length) {
    handleAddAndUpdateImageData(blogId, data, currentBlogImageNameArray);
  } else {
    imageArray.forEach(async (imageObject, key) => {
      let index = imageObject.key.slice(-1) - 1;
      const byteData = await imageObject.value.arrayBuffer();
      const buffer = Buffer.from(byteData);
      const fileName = generateUniquePhotoName();
      console.log(fileName);
      // if (currentBlogImageNameArray[index]) {
      //   let imageName = currentBlogImageNameArray[index];
      //   handleDeletePhoto(imageName);
      // }
      currentBlogImageNameArray[index] = fileName;
      const path = `./public/images/${fileName}`;
      await fs.writeFile(path, buffer, function (err) {
        if (err) console.log(err);
      });
      if (key + 1 === imageArray.length) {
        handleAddAndUpdateImageData(blogId, data, currentBlogImageNameArray);
      }
    });
  }
  return NextResponse.json({ messages: data, success: true });
}
