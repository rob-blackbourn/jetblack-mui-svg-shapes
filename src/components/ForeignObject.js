import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class ForeignObject extends Component {
  render () {
    const {
      classes,
      className,
      children,
      x,
      y,
      width,
      height,
      ...other
    } = this.props

    return (
      <foreignObject
        className={clsx(classes.root, className)}
        x={x} y={y}
        width={width} height={height}
        {...other}
      >
        {children}
      </foreignObject>
    )
  }
}

ForeignObject.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x: PropTypes.number,
  y: PropTypes.number
}

ForeignObject.defaultProps = {
  x: 0,
  y: 0,
  width: 'auto',
  height: 'auto'
}

export default withStyles(styles, { name: 'MuiForeignObject' })(ForeignObject)
