import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Elipse extends Component {
  render () {
    const {
      classes,
      className,
      children,
      cx,
      cy,
      rx,
      ry,
      pathLength,
      ...other
    } = this.props

    return (
      <ellipse
        className={clsx(classes.root, className)}
        cx={cx} cy={cy} rx={rx} ry={ry}
        pathLength={pathLength}
        {...other}
      >
        {children}
      </ellipse>
    )
  }
}

Elipse.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  cx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  cy: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ry: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pathLength: PropTypes.number
}

Elipse.defaultProps = {
  x: 0,
  y: 0,
  rx: 'auto',
  ry: 'auto',
  pathLength: null
}

export default withStyles(styles, { name: 'MuiElipse' })(Elipse)
