'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TitleBar = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TitleBar extends _react.Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      title: document.title || 'Electron'
    }, _temp;
  }

  componentDidMount() {
    this.props.currentWindow.addListener('page-title-updated', (e, title) => {
      this.setState({ title: title });
    });
  }

  render() {
    const { isFocused } = this.props;
    const { title } = this.state;
    //const classOnHover = showOnHover ? 'show-on-hover' : ''
    const classOnFocus = isFocused ? 'macos-title-bar-focused' : '';
    return _react2.default.createElement(
      'div',
      { className: `${classOnFocus} macos-title-bar` },
      _react2.default.createElement(
        'p',
        { id: 'title' },
        title
      )
    );
  }
}
exports.TitleBar = TitleBar;
TitleBar.propTypes = {
  //showOnHover: PropTypes.bool,
  isFocused: _propTypes2.default.bool
};