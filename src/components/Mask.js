import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Mask extends Component {
  render () {
    const {
      classes,
      className,
      children,
      width,
      height,
      maskContentUnits,
      maskUnits,
      x,
      y,
      ...other
    } = this.props

    return (
      <mask
        className={clsx(classes.root, className)}
        width={width} height={height}
        maskContentUnits={maskContentUnits} maskUnits={maskUnits}
        x={x} y={y}
        {...other}
      >
        {children}
      </mask>
    )
  }
}

Mask.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  maskContentUnits: PropTypes.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  maskUnits: PropTypes.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Mask.defaultProps = {
  width: '120%',
  height: '120%',
  maskContentUnits: 'userSpaceOnUse',
  maskUnits: 'objectBoundingBox',
  x: '-10%',
  y: '-10%'
}

export default withStyles(styles, { name: 'MuiMask' })(Mask)
