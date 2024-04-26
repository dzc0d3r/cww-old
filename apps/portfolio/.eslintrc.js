module.exports = {
  extends: ["@codewithwalid/eslint-config/next.js"],
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname
  }
};
