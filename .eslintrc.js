module.exports = {
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/base",
    "plugin:vue/vue3-recommended",
    "plugin:vue/vue3-strongly-recommended",
    "prettier",
  ],
  rules: {
    "vue/multi-word-component-names": "off",
  },
};
