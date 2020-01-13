const fs = require('fs');

export const selfMotion = (path: string) => {
  const files = fs.readdirSync(path);
  console.log(files)
}

