import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Rectangle extends Component {
  render () {
    const {
      classes,
      className,
      children,
      x,
      y,
      width,
      height,
      rx,
      ry,
      pathLength,
      ...other
    } = this.props

    return (
      <rect
        className={clsx(classes.root, className)}
        x={x} y={y}
        width={width} height={height}
        rx={rx} ry={ry}
        pathLength={pathLength}
        {...other}
      >
        {children}
      </rect>
    )
  }
}

Rectangle.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x: PropTypes.number,
  y: PropTypes.number,
  rx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ry: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pathLength: PropTypes.number
}

Rectangle.defaultProps = {
  x: 0,
  y: 0,
  width: 'auto',
  height: 'auto',
  rx: 'auto',
  ry: 'auto',
  pathLength: null
}

export default withStyles(styles, { name: 'MuiRectangle' })(Rectangle)
