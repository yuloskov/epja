import React from "react"
import ReactDom from "react-dom"


import { App } from './app'

export default () => <App/>

const mount = (Component) => {
  ReactDom.render(<Component />, document.getElementById('root'))
}

const unmount = () => {
  ReactDom.unmountComponentAtNode(document.getElementById('root'))
}