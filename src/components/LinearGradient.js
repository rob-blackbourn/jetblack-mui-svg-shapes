import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class LinearGradient extends Component {
  render () {
    const {
      classes,
      className,
      children,
      gradientUnits,
      gradientTransform,
      x1,
      x2,
      y1,
      y2,
      spreadMethod,
      ...other
    } = this.props

    return (
      <linearGradient
        className={clsx(classes.root, className)}
        x1={x1} x2={x2} y1={y2} y2={y2}
        gradientTransform={gradientTransform} gradientUnits={gradientUnits}
        spreadMethod={spreadMethod}
        {...other}
      >
        {children}
      </linearGradient>
    )
  }
}

LinearGradient.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  gradientUnits: PropTypes.oneOf(['userSpaceOnUse', 'objectBoundingBox']),
  gradientTransform: PropTypes.string,
  spreadMethod: PropTypes.oneOf(['pad', 'reflect', 'repeat']),
  x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y2: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

LinearGradient.defaultProps = {
  gradientUnits: 'objectBoundingBox',
  gradientTransform: 'identity transform',
  spreadMethod: 'pad',
  x1: '0%',
  x2: '100%',
  y1: '0%',
  y2: '0%'
}

export default withStyles(styles, { name: 'MuiLinearGradient' })(LinearGradient)
