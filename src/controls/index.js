import React from 'react'
import PropTypes from 'prop-types'
import { Close } from './close'
import { Minimize } from './minimize'
import { Fullscreen } from './fullscreen'

export const Controls = ({ isFullscreen, isFocused, disableMinimize, disableFullscreen, currentWindow }) => (
  !isFullscreen &&
    <div className = 'macos-window-control'>
      <Close currentWindow = {currentWindow} isFocused = {isFocused}></Close>
      <Minimize disabled = {disableMinimize} currentWindow = {currentWindow} isFocused = {isFocused}></Minimize>
      <Fullscreen disabled = {disableFullscreen} currentWindow = {currentWindow} isFocused={isFocused}></Fullscreen>
    </div>
)
Controls.propTypes = {
  isFullscreen: PropTypes.bool,
  isFocused: PropTypes.bool,
  disableMinimize: PropTypes.bool,
  disableFullscreen: PropTypes.bool,
  currentWindow: PropTypes.object.isRequired,
}
