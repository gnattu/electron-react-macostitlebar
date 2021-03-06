import React from 'react'
import PropTypes from 'prop-types'
import { Close } from './close'
import { Minimize } from './minimize'
import { Fullscreen } from './fullscreen'

export const Controls = ({ isFullscreen, isFocused, disableMinimize, disableFullscreen, currentWindow, showOnHover }) => (
  <div className = 'macos-window-control'>
    {!isFullscreen &&
      <React.Fragment>
        <Close currentWindow = {currentWindow} isFocused = {isFocused} showOnHover={showOnHover}></Close>
        <Minimize disabled = {disableMinimize} currentWindow = {currentWindow} isFocused = {isFocused} showOnHover={showOnHover}></Minimize>
        <Fullscreen disabled = {disableFullscreen} currentWindow = {currentWindow} isFocused={isFocused} showOnHover={showOnHover}></Fullscreen>
      </React.Fragment>
    }
  </div>
)
Controls.propTypes = {
  showOnHover: PropTypes.bool,
  isFullscreen: PropTypes.bool,
  isFocused: PropTypes.bool,
  disableMinimize: PropTypes.bool,
  disableFullscreen: PropTypes.bool,
  currentWindow: PropTypes.object.isRequired,
}
