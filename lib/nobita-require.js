const path = require('path');
const fs = require('fs');

module.exports = (src) => {
  const fileSrc = path.resolve(cwd, src);
  const fileExists = fs.existsSync(fileSrc);

  if (fileExists) {
    return require(fileSrc);
  }
  return null;
}
