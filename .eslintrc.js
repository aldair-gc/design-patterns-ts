module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier", "plugin:prettier/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  rules: {
    "prettier/prettier": "warn",
    "@typescript-eslint/no-empty-function": "off",
  },
};
