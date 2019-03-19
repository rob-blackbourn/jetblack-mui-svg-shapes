import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Circle extends Component {
  render () {
    const {
      classes,
      className,
      children,
      cx,
      cy,
      r,
      pathLength,
      ...other
    } = this.props

    return (
      <circle
        className={clsx(classes.root, className)}
        cx={cx} cy={cy} r={r}
        pathLength={pathLength}
        {...other}
      >
        {children}
      </circle>
    )
  }
}

Circle.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  r: PropTypes.number,
  pathLength: PropTypes.number
}

Circle.defaultProps = {
  x: 0,
  y: 0,
  r: 0,
  pathLength: null
}

export default withStyles(styles, { name: 'MuiCircle' })(Circle)
