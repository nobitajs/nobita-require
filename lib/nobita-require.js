const path = require('path');
const fs = require('fs');
const cwd = process.cwd();
const data = {};

module.exports = (src) => {
  const fileSrc = path.resolve(cwd, src);
  if (data[fileSrc]) {
    return data[fileSrc];
  }
  const fileExists = fs.existsSync(fileSrc);

  if (fileExists) {
    data[fileSrc] = require(fileSrc);
    return data[fileSrc];
  }

  return null;
}
