import './polyfill-amis'
import ReactDOM from 'react-dom'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/css/v4-shims.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'amis/lib/themes/cxd.css'
import 'amis/lib/helper.css'
import 'amis/sdk/iconfont.css'
import 'amis-editor/dist/style.css'
import 'react-datetime/css/react-datetime.css'
import 'codemirror/lib/codemirror.css'
import 'cropperjs/dist/cropper.css'
import 'video-react/dist/video-react.css'
import './scss/style.scss'

import { mountInIframe } from 'amis-editor'

mountInIframe(document.getElementById('root')!, ReactDOM)
