import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { remote } from 'electron'

import { Controls } from './controls/'

class macOSTitleBar extends Component {
  static propTypes = {
    showOnHover: PropTypes.bool,
    controlOnly: PropTypes.bool,
    disableMinimize: PropTypes.bool,
    disableFullscreen: PropTypes.bool,
    currentWindow: PropTypes.object,
  }
  static defaultProps = {
    currentWindow: remote.getCurrentWindow(),
  }

  state = {
    isFullscreen: this.props.currentWindow.isFullScreen(),
    isFocused: this.props.currentWindow.isFocused(),
  }

  componentDidMount() {
    this.props.currentWindow.addListener('enter-full-screen', () => this.setState({ isFullscreen: true }))
    this.props.currentWindow.addListener('leave-full-screen', () => this.setState({ isFullscreen: false }))
    this.props.currentWindow.addListener('focus', () => this.setState({ isFocused: true }))
    this.props.currentWindow.addListener('blur', () => this.setState({ isFocused: false }))
  }

  render() {
    const { disableFullscreen, disableMinimize, currentWindow, controlOnly, showOnHover } = this.props
    const { isFullscreen, isFocused } = this.state
    const classOnFocus = isFocused ? 'electron-macos-title-bar-focused' : ''
    if (controlOnly) {
      return (
        <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}style={{paddingLeft: 3, paddingRight: 3}}></Controls>
      )
    } else {
      return (
        !isFullscreen &&
          <div className={`${classOnFocus} electron-macos-title-bar`}>
            <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused}></Controls>
          </div>
      )
    }
  }
}

export { macOSTitleBar }
