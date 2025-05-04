const fs = require("fs/promises");
const path = require("path");
const moment = require("moment");
async function read(dirname) {
  const dirs = await fs.readdir(dirname);
  for (let dir of dirs) {
    const stat = await fs.stat(path.join(dirname, dir));
    if (stat.isFile()) {
      if (dir.includes("txt")) {
        const date = moment(stat.mtime).format("YYYY-MM-DD");
        const kb = (stat.size / 1024).toFixed(1);
        console.log(`${dir} - ${kb} - modified : ${date}`);
      }
    }
  }
}
read(__dirname);
