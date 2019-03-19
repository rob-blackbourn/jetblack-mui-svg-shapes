import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Text extends Component {
  render () {
    const {
      children,
      classes,
      className,
      x,
      y,
      dx,
      dy,
      rotate,
      lengthAdjust,
      textLength,
      ...others
    } = this.props

    return (
      <text
        className={clsx(classes.root, className)}
        x={x} y={y}
        dx={dx} dy={dy}
        rotate={rotate}
        lengthAdjust={lengthAdjust}
        textLength={textLength}
        {...others}
      >
        {children}
      </text>
    )
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  dx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  dy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rotate: PropTypes.arrayOf(PropTypes.number),
  lengthAdjust: PropTypes.oneOf(['spacing', 'spacingAndGlyphs']),
  textLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Text.defaultProps = {
  x: 0,
  y: 0,
  dx: null,
  dy: null,
  rotate: null,
  lengthAdjust: 'spacing',
  textLength: null
}

export default withStyles(styles, { name: 'MuiText' })(Text)
