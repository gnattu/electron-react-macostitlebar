const React = require('react')
const ReactDOM = require('react-dom')

const { macOSTitleBar } = require('..')
const titleBarArgs = {
  disableFullscreen: false,
  disableMinimize: true,
  controlOnly: true,
  showOnHover: true,
}
ReactDOM.render(React.createElement(macOSTitleBar, titleBarArgs), document.querySelector('.title'))
