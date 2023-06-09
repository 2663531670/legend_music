module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "files": ["src/**/*.ts", "src/**/*.vue"],
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "no-undef": "off"
    }
}
