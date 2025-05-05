const fs = require("fs/promises");
const path = require("path");
async function deleteFIle(params) {
  const readfile = await fs.readFile("first.txt", "utf-8");
  await fs.unlink(`${readfile}.txt`);
}

// deleteFIle();

async function DeleteTxt(dirname) {
  const dirs = await fs.readdir(dirname);

  for (let dir of dirs) {
    const stat = await fs.stat(path.join(dirname, dir));
    const absolutePath = path.join(dirname, dir);
    console.log(stat.size);
    if (stat.isFile()) {
      if (dir.includes("txt")) {
        await fs.unlink(absolutePath);
      }
    }
    if (stat.isDirectory()) {
      // console.log(absolutePath);
      await DeleteTxt(absolutePath);
    }
  }
}

// DeleteTxt(__dirname);
const [, , arg] = process.argv;
async function getData() {
  const data = await fs.readFile("product.json", "utf-8");
  const parsedData = JSON.parse(data);
  if (arg === "ASC") {
    parsedData.sort((a, b) => {
      return a.id - b.id;
    });
    console.log(parsedData);
  }
  if (arg === "DESC") {
    parsedData.sort((a, b) => {
      return b.id - a.id;
    });
    console.log(parsedData);
  }
}

getData();
