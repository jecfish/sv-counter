import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    // sourcemapIgnoreList(sourcePath, sourcemapPath) {
    //   // console.log(sourcePath, sourcemapPath, sourcePath.includes('index'));
    //   // return !sourcePath.includes('App') || sourcePath.includes('node_modules');
    //   return false;
    // },
  }
})
