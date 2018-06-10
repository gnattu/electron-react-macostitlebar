const React = require('react')
const ReactDOM = require('react-dom')

const { MacOSTitleBar } = require('..')
const titleBarArgs = {
  disableFullscreen: false,
  disableMinimize: true,
  controlOnly: false,
  showOnHover: false,
}
ReactDOM.render(React.createElement(MacOSTitleBar, titleBarArgs), document.querySelector('.title'))
