import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { remote } from 'electron'

import { Controls } from './controls/'
import { TitleBar } from './titlebar/'
import { ToolBar } from './toolbar/'

class MacOSTitleBar extends Component {
  static propTypes = {
    toolBarComponent: PropTypes.element,
    toolBarInset: PropTypes.bool,
    toolBarProps: PropTypes.object,
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
    const { toolBarComponent, toolBarInset, disableFullscreen, disableMinimize, currentWindow, controlOnly, showOnHover, toolBarProps } = this.props
    const { isFullscreen, isFocused } = this.state
    if (controlOnly) {
      return (
        <div id="electron-macos-title-bar">
          <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
        </div>
      )
    } else if (toolBarComponent){
      return (
        <div id="electron-macos-title-bar">
          {toolBarInset ? (
            <ToolBar toolBarProps={toolBarProps} isFocused={isFocused}>
              <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
              {toolBarComponent}
            </ToolBar>
          ):(
            <React.Fragment>
              <TitleBar transparent={true} currentWindow={currentWindow} isFocused={isFocused} showOnHover={showOnHover}></TitleBar>
              <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
              <ToolBar toolBarProps={toolBarProps} isFocused={isFocused}>{toolBarComponent}</ToolBar>
            </React.Fragment>
          )}
        </div>
      )
    } else {
      return (
        !isFullscreen &&
        <div id="electron-macos-title-bar">
          <TitleBar currentWindow={currentWindow} isFocused={isFocused} showOnHover={showOnHover}></TitleBar>
          <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow} isFullscreen={isFullscreen} isFocused={isFocused} showOnHover={showOnHover}></Controls>
        </div>
      )
    }
  }
}

export { MacOSTitleBar }
