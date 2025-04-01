import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import esLintImportPlugin from "eslint-plugin-import";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: esLintImportPlugin,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-explicit-any": ["warn"],
      "import/first": "error",
      "import/newline-after-import": [
        "error",
        {
          count: 1,
        },
      ],
      "import/no-absolute-path": [
        "error",
        {
          esmodule: true,
          commonjs: true,
          amd: false,
        },
      ],
      "import/order": [
        "error",
        {
          "newlines-between": "always",
          warnOnUnassignedImports: true,
          pathGroups: [
            {
              pattern: "@**",
              group: "internal",
              position: "after",
            },
          ],
          groups: [
            ["builtin", "external"],
            "internal",
            ["parent", "sibling", "index"],
          ],
        },
      ],
    },
  },
);
