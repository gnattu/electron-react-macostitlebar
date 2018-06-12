'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MacOSTitleBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _electron = require('electron');

var _controls = require('./controls/');

var _titlebar = require('./titlebar/');

var _toolbar = require('./toolbar/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MacOSTitleBar extends _react.Component {
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
    const { toolBarComponent, toolBarInset, disableFullscreen, disableMinimize, currentWindow, controlOnly, showOnHover, toolBarProps } = this.props;
    const { isFullscreen, isFocused } = this.state;
    if (controlOnly) {
      return _react2.default.createElement(
        'div',
        { id: 'electron-macos-title-bar' },
        _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused, showOnHover: showOnHover })
      );
    } else if (toolBarComponent) {
      return _react2.default.createElement(
        'div',
        { id: 'electron-macos-title-bar' },
        toolBarInset ? _react2.default.createElement(
          _toolbar.ToolBar,
          { toolBarProps: toolBarProps, isFocused: isFocused },
          _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused, showOnHover: showOnHover }),
          toolBarComponent
        ) : _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(_titlebar.TitleBar, { transparent: true, currentWindow: currentWindow, isFocused: isFocused, showOnHover: showOnHover }),
          _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused, showOnHover: showOnHover }),
          _react2.default.createElement(
            _toolbar.ToolBar,
            { toolBarProps: toolBarProps, isFocused: isFocused },
            toolBarComponent
          )
        )
      );
    } else {
      return !isFullscreen && _react2.default.createElement(
        'div',
        { id: 'electron-macos-title-bar' },
        _react2.default.createElement(_titlebar.TitleBar, { currentWindow: currentWindow, isFocused: isFocused, showOnHover: showOnHover }),
        _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow, isFullscreen: isFullscreen, isFocused: isFocused, showOnHover: showOnHover })
      );
    }
  }
}

MacOSTitleBar.propTypes = {
  toolBarComponent: _propTypes2.default.element,
  toolBarInset: _propTypes2.default.bool,
  toolBarProps: _propTypes2.default.object,
  showOnHover: _propTypes2.default.bool,
  controlOnly: _propTypes2.default.bool,
  disableMinimize: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool,
  currentWindow: _propTypes2.default.object
};
MacOSTitleBar.defaultProps = {
  currentWindow: _electron.remote.getCurrentWindow()
};
exports.MacOSTitleBar = MacOSTitleBar;