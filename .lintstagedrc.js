const path = require("path");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand], // 這些格式的文件在提交時交給 ESLint 校驗
  "**/*.{js,jsx,tsx,ts,less,md,json}": ["prettier --write"], // 這些格式的文件在提交時讓 prettier 格式化
};
