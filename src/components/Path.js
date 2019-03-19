import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Path extends Component {
  render () {
    const {
      classes,
      className,
      children,
      d,
      pathLength,
      ...other
    } = this.props

    return (
      <path
        className={clsx(classes.root, className)}
        d={d} pathLength={pathLength}
        {...other}
      >
        {children}
      </path>
    )
  }
}

Path.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  d: PropTypes.string.isRequired,
  pathLength: PropTypes.number
}

Path.defaultProps = {
  pathLength: null
}

export default withStyles(styles, { name: 'MuiPath' })(Path)
