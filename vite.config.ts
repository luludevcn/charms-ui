import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({

  plugins: [react(), tailwindcss(), dts({
    rollupTypes: true,
    tsconfigPath: './tsconfig.app.json',
    entryRoot: 'src',
    outDir: 'dist/types',
    insertTypesEntry: true,
    include: ['src/**/*.ts', 'src/**/*.tsx'],
    exclude: ['src/App.tsx', 'src/main.tsx'],
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: {
        Button: resolve(__dirname, 'src/components/Button/index.tsx'),
        index: resolve(__dirname, 'src/index.ts')
      },
      formats: ['es'],
      name: 'CharmsUI',
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    emptyOutDir: true,
    minify: 'esbuild'
  }
})
