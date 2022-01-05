const moduleMap = {
  'monaco-editor': (cb: any) => {
    // @ts-ignore
    window.MonacoEnvironment = window.MonacoEnvironment_OLD
    import('monaco-editor').then(cb)
  },
  'react-cropper': (cb: any) => import('react-cropper').then((res) => cb(addEsmodule(res, true))),
  papaparse: (cb: any) => import('papaparse').then((res) => cb(addEsmodule(res))),
  codemirror: (cb: any) => import('codemirror').then((res) => cb(addEsmodule(res))),
  'codemirror/mode/javascript/javascript': (cb: any) =>
    import('codemirror/mode/javascript/javascript').then((res) => cb(addEsmodule(res))),
  'codemirror/mode/htmlmixed/htmlmixed': (cb: any) =>
    import('codemirror/mode/htmlmixed/htmlmixed').then((res) => cb(addEsmodule(res))),
  'codemirror/addon/mode/simple': (cb: any) =>
    import('codemirror/addon/mode/simple').then((res) => cb(addEsmodule(res))),
  'codemirror/addon/mode/multiplex': (cb: any) =>
    import('codemirror/addon/mode/multiplex').then((res) => cb(addEsmodule(res))),
  echarts: (cb: any) => import('echarts').then((res) => cb(addEsmodule(res, true))),
  'echarts-stat': (cb: any) => import('echarts-stat').then((res) => cb(addEsmodule(res))),
  'echarts/extension/dataTool': (cb: any) =>
    import('echarts/extension/dataTool').then((res) => cb(addEsmodule(res))),
  'echarts/extension/bmap/bmap': (cb: any) =>
    import('echarts/extension/bmap/bmap').then((res) => cb(addEsmodule(res))),
  exceljs: (cb: any) => import('exceljs').then((res) => cb(addEsmodule(res))),
  'mpegts.js': (cb: any) => import('mpegts.js').then((res) => cb(addEsmodule(res))),
  'hls.js': (cb: any) => import('hls.js').then((res) => cb(addEsmodule(res))),
  './CityDB': (cb: any) =>
    import('amis/lib/renderers/Form/CityDB').then((res) => cb(addEsmodule(res))),
  '../../components/Editor': (cb: any) =>
    import('amis/lib/components/Editor').then((res) => cb(addEsmodule(res))),
  '../../components/ColorPicker': (cb: any) =>
    import('amis/lib/components/ColorPicker').then((res) => cb(addEsmodule(res))),
  '../../components/Tinymce': (cb: any) => {
    import('tinymce/skins/ui/oxide/skin.css')
    import('amis/lib/components/Tinymce').then((res) => cb(addEsmodule(res)))
  },
  '../../components/RichText': (cb: any) => {
    import('froala-editor/css/froala_style.min.css')
    import('froala-editor/css/froala_editor.pkgd.min.css')
    import('amis/lib/components/RichText').then((res) => cb(addEsmodule(res)))
  },
  '../components/Markdown': (cb: any) =>
    import('amis/lib/components/Markdown').then((res) => cb(addEsmodule(res))),
}

// @ts-ignore hack amis
window.require = (module, cb) => {
  if (Array.isArray(module)) {
    const importFn = moduleMap[module[0] as keyof typeof moduleMap]
    if (!importFn) {
      console.error('未处理amis的异步加载资源，请注意处理', module)
    } else {
      importFn(cb)
    }
    return
  }
  console.log('amis 异步加载的资源: ', module)
}

function addEsmodule(mod: any, dev = false) {
  if (import.meta.env.DEV && !dev) return mod
  const o = {
    get __esModule() {
      return true
    },
    ...mod,
  }
  for (const k in mod) {
    if (Object.prototype.hasOwnProperty.call(mod, k)) {
      Object.defineProperty(o, k, {
        enumerable: true,
        get: function () {
          return mod[k]
        },
      })
    }
  }
  return o
}
