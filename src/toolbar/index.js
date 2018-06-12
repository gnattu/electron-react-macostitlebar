import React from 'react'
import PropTypes from 'prop-types'

export const ToolBar = ({ toolBarProps, isFocused, children }) => {
  const toolBarInset = React.Children.count(children) === 2
  const classOnFocus = isFocused ? 'macos-tool-bar-focused' : ''
  const classContainer = toolBarInset ? 'tool-bar-container-inset' : 'tool-bar-container-attatch'
  const toolBarComponent = toolBarInset ? (
    React.cloneElement(children[1], {...toolBarProps})
  ) : (
    React.cloneElement(children, {...toolBarProps})
  )
  return (
    <div className={`${classOnFocus} macos-tool-bar`}>
      {toolBarInset && children[0]}
      <div className={`${classContainer}`}>{toolBarComponent}</div>
    </div>
  )
}
ToolBar.propTypes = {
  toolBarProps: PropTypes.object,
  isFocused: PropTypes.bool,
  children: PropTypes.node,
}
