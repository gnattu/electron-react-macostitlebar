import React from 'react'
import PropTypes from 'prop-types'

import { Controls } from './controls/'

export const macOSTitleBar = ({disableFullscreen, disableMinimize, currentWindow}) => (
  <Controls disableFullscreen={disableFullscreen} disableMinimize={disableMinimize} currentWindow={currentWindow}></Controls>
)

macOSTitleBar.propTypes = {
  disableMinimize: PropTypes.bool,
  disableMaximize: PropTypes.bool,
  currentWindow: PropTypes.object,
}
