import { defineConfig } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { glob } from 'glob';

import inject from '@rollup/plugin-inject';

import liveReload from 'vite-plugin-live-reload';

function moveOutputPlugin() {
  return {
    name: 'move-output',
    enforce: 'post',
    apply: 'build',
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith('pages/')) {
          const newFileName = fileName.slice('pages/'.length);
          bundle[fileName].fileName = newFileName;
        }
      }
    },
  };
}

export default defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: 'web_slicing_2023_Alpha',
  plugins: [
    liveReload(['./layout/**/*.ejs', './pages/**/*.ejs', './pages/**/*.html']),
    ViteEjsPlugin(),
    moveOutputPlugin(),
    // inject({
    //   $: 'jquery', // 这里会自动载入 node_modules 中的 jquery
    //   jQuery: 'jquery',
    //   'windows.jQuery': 'jquery',
    // }),
  ],
  css: {
    // 增加 source map
    devSourcemap: true,
  },
  server: {
    // 啟動 server 時預設開啟的頁面
    open: 'pages/index.html',
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('pages/**/*.html')
          .map((file) => [
            path.relative(
              'pages',
              file.slice(0, file.length - path.extname(file).length)
            ),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    outDir: 'dist',
  },
});
