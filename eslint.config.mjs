import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    rules: {
      // Ví dụ: báo lỗi khi dùng console.log
      "no-console": "error",
      // Ví dụ: báo lỗi khi import không dùng
      "no-unused-vars": "error",
      // Ví dụ: cảnh báo khi thụt lề sai
      indent: ["warn", 2],
    },
  },
];

export default eslintConfig;
