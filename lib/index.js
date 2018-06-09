'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.macOSTitleBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _electron = require('electron');

var _controls = require('./controls/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class macOSTitleBar extends _react.Component {
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
    const { disableFullscreen, disableMinimize, currentWindow, controlOnly, showOnHover } = this.props;
    const { isFullscreen, isFocused } = this.state;
    const classOnFocus = isFocused ? 'electron-macos-title-bar-focused' : '';
    if (controlOnly) {
      return _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused, showOnHover: showOnHover, style: { paddingLeft: 3, paddingRight: 3 } });
    } else {
      return !isFullscreen && _react2.default.createElement(
        'div',
        { className: `${classOnFocus} electron-macos-title-bar` },
        _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused })
      );
    }
  }
}

macOSTitleBar.propTypes = {
  showOnHover: _propTypes2.default.bool,
  controlOnly: _propTypes2.default.bool,
  disableMinimize: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool,
  currentWindow: _propTypes2.default.object
};
macOSTitleBar.defaultProps = {
  currentWindow: _electron.remote.getCurrentWindow()
};
exports.macOSTitleBar = macOSTitleBar;