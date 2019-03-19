import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { preserveAspectRatioPropType, formatPreserveAspecRatio } from './properties'

export const styles = {
  root: {
  }
}

class Symbol extends Component {
  render () {
    const {
      classes,
      className,
      children,
      width,
      height,
      preserveAspectRatio,
      refX,
      refY,
      x,
      y,
      ...other
    } = this.props

    return (
      <symbol
        className={clsx(classes.root, className)}
        width={width} height={height}
        preserveAspectRatio={formatPreserveAspecRatio(preserveAspectRatio)}
        refX={refX} refY={refY}
        x={x} y={y}
        {...other}
      >
        {children}
      </symbol>
    )
  }
}

Symbol.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  preserveAspectRatio: preserveAspectRatioPropType.isRequired,
  refX: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  refY: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  viewBox: PropTypes.arrayOf(PropTypes.number)
}

Symbol.defaultProps = {
  width: 'auto',
  height: 'auto',
  preserveAspectRatio: { align: 'xMidYMid', meetOrSlice: 'meet' },
  refX: 0,
  refY: 0,
  x: 0,
  y: 0
}

export default withStyles(styles, { name: 'MuiSymbol' })(Symbol)
