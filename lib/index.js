'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.macOSTitleBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _controls = require('./controls/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const macOSTitleBar = exports.macOSTitleBar = ({ disableFullscreen, disableMinimize, currentWindow }) => _react2.default.createElement(_controls.Controls, { disableFullscreen: disableFullscreen, disableMinimize: disableMinimize, currentWindow: currentWindow });

macOSTitleBar.propTypes = {
  disableMinimize: _propTypes2.default.bool,
  disableMaximize: _propTypes2.default.bool,
  currentWindow: _propTypes2.default.object
};