import { Renderer } from 'amis'
import type { RendererProps } from 'amis/lib/factory'
import React from 'react'

export interface MyRendererProps extends RendererProps {
  target?: string
}

export default class MyRenderer extends React.Component<MyRendererProps> {
  static defaultProps = {
    target: 'world',
  }

  render() {
    console.log(this.props)
    const { target } = this.props

    return <p>Hello {target}!</p>
  }
}
Renderer({
  test: /\bmy-renderer$/,
  name: 'my-renderer',
})(MyRenderer)
