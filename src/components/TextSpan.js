import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class TextSpan extends Component {
  render () {
    const {
      classes,
      className,
      children,
      ...other
    } = this.props

    return (
      <tspan
        className={clsx(classes.root, className)}
        {...other}
      >
        {children}
      </tspan>
    )
  }
}

TextSpan.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number,
  dx: PropTypes.number,
  dy: PropTypes.number,
  rotate: PropTypes.string,
  textLength: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lengthAdjust: PropTypes.oneOf(['spacing', 'spacingAndGlyphs'])
}

TextSpan.defaultProps = {
}

export default withStyles(styles, { name: 'MuiTextSpan' })(TextSpan)
