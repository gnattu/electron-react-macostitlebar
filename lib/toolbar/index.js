'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToolBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ToolBar = exports.ToolBar = ({ toolBarProps, isFocused, children }) => {
  const toolBarInset = _react2.default.Children.count(children) === 2;
  const classOnFocus = isFocused ? 'macos-tool-bar-focused' : '';
  const classContainer = toolBarInset ? 'tool-bar-container-inset' : 'tool-bar-container-attatch';
  const toolBarComponent = toolBarInset ? _react2.default.cloneElement(children[1], _extends({}, toolBarProps))
  //children[1]
  : _react2.default.cloneElement(children, _extends({}, toolBarProps))
  //children
  ;
  return _react2.default.createElement(
    'div',
    { className: `${classOnFocus} macos-tool-bar` },
    toolBarInset && children[0],
    _react2.default.createElement(
      'div',
      { className: `${classContainer}` },
      toolBarComponent
    )
  );
};
ToolBar.propTypes = {
  toolBarProps: _propTypes2.default.object,
  isFocused: _propTypes2.default.bool,
  children: _propTypes2.default.node
};