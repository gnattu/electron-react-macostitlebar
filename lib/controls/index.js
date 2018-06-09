'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controls = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _electron = require('electron');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./close');

var _minimize = require('./minimize');

var _fullscreen = require('./fullscreen');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Controls extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isFullscreen: this.props.currentWindow.isFullScreen(),
      isFocused: this.props.currentWindow.isFocused()
    }, _temp;
  }

  componentDidMount() {
    this.props.currentWindow.addListener('enter-full-screen', () => this.setState({ isFullscreen: true }));
    this.props.currentWindow.addListener('leave-full-screen', () => this.setState({ isFullscreen: false }));
    this.props.currentWindow.addListener('focus', () => this.setState({ isFocused: true }));
    this.props.currentWindow.addListener('blur', () => this.setState({ isFocused: false }));
  }
  render() {
    const { disableMinimize, disableFullscreen, currentWindow } = this.props;
    const { isFullscreen, isFocused } = this.state;
    return !isFullscreen && _react2.default.createElement(
      'div',
      { className: 'macos-window-control' },
      _react2.default.createElement(_close.Close, { currentWindow: currentWindow, isFocused: isFocused }),
      _react2.default.createElement(_minimize.Minimize, { disabled: disableMinimize, currentWindow: currentWindow, isFocused: isFocused }),
      _react2.default.createElement(_fullscreen.Fullscreen, { disabled: disableFullscreen, currentWindow: currentWindow, isFocused: isFocused })
    );
  }
}

Controls.propTypes = {
  disableMinimize: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool,
  currentWindow: _propTypes2.default.object
};
Controls.defaultProps = {
  currentWindow: _electron.remote.getCurrentWindow()
};
exports.Controls = Controls;