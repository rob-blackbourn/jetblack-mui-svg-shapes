import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { preserveAspectRatioPropType, formatPreserveAspecRatio } from './properties'

export const styles = {
  root: {
  }
}

class Svg extends Component {
  render () {
    const {
      classes,
      className,
      children,
      width,
      height,
      x,
      y,
      viewBox,
      preserveAspectRatio,
      ...others
    } = this.props

    return (
      <svg
        className={clsx(classes.root, className)}
        width={width} height={height}
        x={x} y={y}
        viewBox={viewBox}
        preserveAspectRatio={formatPreserveAspecRatio(preserveAspectRatio)}
        {...others}
      >
        {children}
      </svg>
    )
  }
}

Svg.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x: PropTypes.number,
  y: PropTypes.number,
  viewBox: PropTypes.arrayOf(PropTypes.number),
  preserveAspectRatio: preserveAspectRatioPropType.isRequired
}

Svg.defaultProps = {
  width: 'auto',
  height: 'auto',
  x: 0,
  y: 0,
  viewBox: null,
  preserveAspectRatio: { align: 'xMidYMid', meetOrSlice: 'meet' }
}

export default withStyles(styles, { name: 'MuiSvg' })(Svg)
