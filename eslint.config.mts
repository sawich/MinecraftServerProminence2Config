import { defineConfig } from "eslint/config";

import json from "@eslint/json";
import jsonc from 'eslint-plugin-jsonc'

export default defineConfig([
    {
        plugins:
        {
            json,
            jsonc
        }
    },
    // {
    //     files: ["**/*.json"],
    //     language: "json/json",
    //     rules: {
    //         "json/no-duplicate-keys": "error",
    //     },
    // },
    {
        files: ["**/*.json", "**/*.jsonc", ".vscode/**/*.json"],
        language: "json/jsonc",
        rules: {
            "json/no-duplicate-keys": "error",
            "jsonc/quote-props": ["error", "always"]
        },
    },
    {
        files: ["**/*.json5"],
        language: "json/json5",
        rules: {
            "json/no-duplicate-keys": "error",
            "jsonc/quote-props": ["error", "always"]
        },
    },
]);
