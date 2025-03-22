import pluginNext from "@next/eslint-plugin-next"
import js from "@eslint/js"

export default [
  js.configs.recommended,
  {
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
]
