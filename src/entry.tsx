import React, { useState } from 'react'
import { Editor } from 'amis-editor'
import schemaUrl from 'amis/schema.json?url'
import 'amis-editor/dist/style.css'
import './renderer/MyRenderer'
import './editor/MyRenderer'
import { AlertComponent, ToastComponent } from 'amis'

const base = /^http/.test(import.meta.env.BASE_URL) ? '/' : import.meta.env.BASE_URL

export function EditorComponent() {
  const [schema, setScheme] = useState<Record<any, any>>()
  const [preview, setPreview] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  return (
    <div className="routes-wrapper">
      <ToastComponent key="toast" position={'top-right'} theme={'cxd'} />
      <AlertComponent key="alert" theme={'cxd'} />
      <Editor
        theme={'cxd'}
        preview={preview}
        value={schema as any}
        onChange={(value: any) => setScheme(value)}
        className="is-fixed"
        $schemaUrl={schemaUrl}
        iframeUrl={`${base}mobile.html`}
        isMobile={isMobile}
      />
    </div>
  )
}
