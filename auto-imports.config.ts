import AutoImport from 'unplugin-auto-import/vite'

export default AutoImport({
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],
  imports: [
    'vue'
  ],
  defaultExportByFilename: false,
  dts: './auto-imports.d.ts',
  cache: false,
  vueTemplate: false,
  injectAtEnd: true,
  eslintrc: {
    enabled: false,
    filepath: './.eslintrc-auto-import.json',
    globalsPropValue: true
  },
})