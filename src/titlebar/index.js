import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TitleBar extends Component {
  static propTypes = {
    //showOnHover: PropTypes.bool,
    isFocused: PropTypes.bool,
    transparent: PropTypes.bool,
  }
  state = {
    title: document.title || 'Electron',
  }
  componentDidMount() {
    this.props.currentWindow.addListener('page-title-updated', (e, title) => {this.setState({title: title})})
  }

  render() {
    const { isFocused, transparent } = this.props
    const { title } = this.state
    //const classOnHover = showOnHover ? 'show-on-hover' : ''
    const classOnFocus = isFocused ? 'macos-title-bar-focused' : ''
    const classTransparent = transparent ? 'macos-title-bar-transparent' : ''
    return (
      <div className={`${classTransparent} ${classOnFocus} macos-title-bar`}>
        <p id="title">{title}</p>
      </div>
    )
  }
}
