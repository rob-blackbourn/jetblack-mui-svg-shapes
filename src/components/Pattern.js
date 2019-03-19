import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { preserveAspectRatioPropType, formatPreserveAspecRatio } from './properties'

export const styles = {
  root: {
  }
}

class Pattern extends Component {
  render () {
    const {
      classes,
      className,
      children,
      width,
      height,
      patternContentUnits,
      patternUnits,
      preserveAspectRatio,
      x,
      y,
      ...other
    } = this.props

    return (
      <pattern
        className={clsx(classes.root, className)}
        width={width} height={height}
        patternContentUnits={patternContentUnits} patternUnits={patternUnits}
        preserveAspectRatio={formatPreserveAspecRatio(preserveAspectRatio)}
        x={x} y={y}
        {...other}
      >
        {children}
      </pattern>
    )
  }
}

Pattern.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  patternContentUnits: PropTypes.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  patternTransform: PropTypes.string,
  patternUnits: PropTypes.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  preserveAspectRatio: preserveAspectRatioPropType.isRequired,
  viewBox: PropTypes.arrayOf(PropTypes.number),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Pattern.defaultProps = {
  width: 0,
  height: 0,
  patternContentUnits: 'userSpaceOnUse',
  patternUnits: 'objectBoundingBox',
  preserveAspectRatio: { align: 'xMidYMid', meetOrSlice: 'meet' },
  x: 0,
  y: 0
}

export default withStyles(styles, { name: 'MuiPattern' })(Pattern)
