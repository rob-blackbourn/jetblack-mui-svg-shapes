import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Line extends Component {
  render () {
    const {
      classes,
      className,
      children,
      x1,
      y1,
      x2,
      y2,
      pathLength,
      ...other
    } = this.props

    return (
      <line
        className={clsx(classes.root, className)}
        x1={x1} y1={y1} x2={x2} y2={y2}
        pathLength={pathLength}
        {...other}
      >
        {children}
      </line>
    )
  }
}

Line.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  x1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y1: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  x2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  y2: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pathLength: PropTypes.number
}

Line.defaultProps = {
  x1: 0,
  y1: 0,
  x2: 0,
  y2: 0,
  propTypes: null
}

export default withStyles(styles, { name: 'MuiLine' })(Line)
