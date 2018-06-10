import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TitleBar extends Component {
  static propTypes = {
    //showOnHover: PropTypes.bool,
    isFocused: PropTypes.bool,
  }
  state = {
    title: document.title || 'Electron',
  }
  componentDidMount() {
    this.props.currentWindow.addListener('page-title-updated', (e, title) => {this.setState({title: title})})
  }

  render() {
    const { isFocused } = this.props
    const { title } = this.state
    //const classOnHover = showOnHover ? 'show-on-hover' : ''
    const classOnFocus = isFocused ? 'macos-title-bar-focused' : ''
    return (
      <div className={`${classOnFocus} macos-title-bar`}>
        <p id="title">{title}</p>
      </div>
    )
  }
}
