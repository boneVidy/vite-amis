/// <reference types="vite/client" />
declare module 'vite-plugin-mockit'
declare module 'webpack-aliyun-oss'
declare module 'papaparse'
declare module 'codemirror'
declare module 'codemirror/mode/javascript/javascript'
declare module 'codemirror/mode/htmlmixed/htmlmixed'
declare module 'codemirror/addon/mode/simple'
declare module 'codemirror/addon/mode/multiplex'

// 环境变量定义
interface ImportMetaEnv extends Readonly<Record<string, string | boolean | undefined>> {
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
