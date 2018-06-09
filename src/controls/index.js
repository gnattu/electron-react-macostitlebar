import React, { Component } from 'react'
import { remote } from 'electron'
import PropTypes from 'prop-types'
import { Close } from './close'
import { Minimize } from './minimize'
import { Fullscreen } from './fullscreen'

class Controls extends Component {
  static propTypes = {
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
    const { disableMinimize, disableFullscreen, currentWindow} = this.props
    const { isFullscreen, isFocused } = this.state
    return (
      !isFullscreen &&
        <div className = 'macos-window-control'>
          <Close currentWindow = {currentWindow} isFocused = {isFocused}></Close>
          <Minimize disabled = {disableMinimize} currentWindow = {currentWindow} isFocused = {isFocused}></Minimize>
          <Fullscreen disabled = {disableFullscreen} currentWindow = {currentWindow} isFocused={isFocused}></Fullscreen>
        </div>
    )
  }
}

export { Controls }
