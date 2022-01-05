import { defineConfig, PluginOption } from 'vite'
import mock from 'vite-plugin-mockit'
import react from '@vitejs/plugin-react'
import monacoEditorPlugin from '@vue3-oop/vite-plugin-monaco-editor'

export default defineConfig(({ command, mode }) => {
  // 处理NODE_ENV
  if (command === 'build') process.env.VITE_USER_NODE_ENV = process.env.NODE_ENV = 'production'

  const base = ''

  const plugins: (PluginOption | PluginOption[])[] = [
    react(),
    monacoEditorPlugin({ globalAPI: true }),
  ]
  switch (mode) {
    case 'development':
      plugins.push(mock())
      break
  }

  return {
    base: base + '/',
    plugins,
    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },
    resolve: {
      alias: [
        { find: /^~/, replacement: '' },
        { find: '@/', replacement: '/src/' },
        { find: /^moment$/, replacement: 'moment/moment.js' },
      ],
    },
    optimizeDeps: {
      include: [
        'moment',
        'react-cropper',
        'papaparse',
        'codemirror',
        'codemirror/mode/javascript/javascript',
        'codemirror/mode/htmlmixed/htmlmixed',
        'codemirror/addon/mode/simple',
        'codemirror/addon/mode/multiplex',
        'echarts',
        'echarts-stat',
        'echarts/extension/dataTool',
        'echarts/extension/bmap/bmap',
        'exceljs',
        'mpegts.js',
        'hls.js',
        'amis/lib/renderers/Form/CityDB',
        'amis/lib/components/Editor',
        'amis/lib/components/ColorPicker',
        'amis/lib/components/Tinymce',
        'amis/lib/components/RichText',
        'amis/lib/components/Markdown',
      ],
    },
    build: {
      rollupOptions: {
        input: {
          main: './index.html',
          mobile: './mobile.html',
        },
      },
      commonjsOptions: {
        // 由于amis里面使用了动态的require
        ignoreDynamicRequires: true,
      },
    },
  }
})
