const React = require('react')
const ReactDOM = require('react-dom')

const { macOSTitleBar } = require('..')
ReactDOM.render(React.createElement(macOSTitleBar), document.querySelector('.title'))
