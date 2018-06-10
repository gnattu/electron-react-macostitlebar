import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { remote } from 'electron'

import { Controls } from './controls/'
import { TitleBar } from './titlebar/'

class MacOSTitleBar extends Component {
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
    if (controlOnly) {
      return (
        <div className="electron-macos-title-bar">
          <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
        </div>
      )
    } else {
      return (
        !isFullscreen &&
        <div className="electron-macos-title-bar">
          <TitleBar currentWindow={currentWindow} isFocused={isFocused} showOnHover={showOnHover}></TitleBar>
          <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
        </div>
      )
    }
  }
}

export { MacOSTitleBar }
