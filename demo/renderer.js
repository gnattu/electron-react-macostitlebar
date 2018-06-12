const React = require('react')
const ReactDOM = require('react-dom')

const { MacOSTitleBar } = require('..')
const { Test } = require('./test.js')
const titleBarArgs = {
  disableFullscreen: false,
  disableMinimize: true,
  controlOnly: false,
  showOnHover: false,
  toolBarComponent: React.createElement(Test, null, null),
  toolBarInset: false,
  toolBarProps: {testProp: 'Test Text'},
}
ReactDOM.render(React.createElement(MacOSTitleBar, titleBarArgs), document.querySelector('.title'))
