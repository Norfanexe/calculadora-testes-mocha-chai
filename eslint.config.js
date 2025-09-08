import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    },
    ...js.configs.recommended,
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2]
    }
  }
]);


