import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Use extends Component {
  render () {
    const {
      classes,
      className,
      children,
      href,
      x,
      y,
      width,
      height,
      ...other
    } = this.props

    return (
      <use
        className={clsx(classes.root, className)}
        href={href}
        x={x} y={y}
        width={width} height={height}
        {...other}
      >
        {children}
      </use>
    )
  }
}

Use.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  x: PropTypes.number,
  y: PropTypes.number,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

Use.defaultProps = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
}

export default withStyles(styles, { name: 'MuiUse' })(Use)
