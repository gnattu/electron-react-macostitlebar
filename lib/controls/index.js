'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Controls = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _close = require('./close');

var _minimize = require('./minimize');

var _fullscreen = require('./fullscreen');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Controls = exports.Controls = ({ isFullscreen, isFocused, disableMinimize, disableFullscreen, currentWindow, showOnHover }) => _react2.default.createElement(
  'div',
  { className: 'macos-window-control' },
  !isFullscreen && _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(_close.Close, { currentWindow: currentWindow, isFocused: isFocused, showOnHover: showOnHover }),
    _react2.default.createElement(_minimize.Minimize, { disabled: disableMinimize, currentWindow: currentWindow, isFocused: isFocused, showOnHover: showOnHover }),
    _react2.default.createElement(_fullscreen.Fullscreen, { disabled: disableFullscreen, currentWindow: currentWindow, isFocused: isFocused, showOnHover: showOnHover })
  )
);
Controls.propTypes = {
  showOnHover: _propTypes2.default.bool,
  isFullscreen: _propTypes2.default.bool,
  isFocused: _propTypes2.default.bool,
  disableMinimize: _propTypes2.default.bool,
  disableFullscreen: _propTypes2.default.bool,
  currentWindow: _propTypes2.default.object.isRequired
};