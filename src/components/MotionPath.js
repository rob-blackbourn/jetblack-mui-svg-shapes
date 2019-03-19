import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class MotionPath extends Component {
  render () {
    const {
      classes,
      className,
      ...other
    } = this.props

    return (
      <mpath
        className={clsx(classes.root, className)}
        {...other}
      />
    )
  }
}

MotionPath.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

MotionPath.defaultProps = {
}

export default withStyles(styles, { name: 'MuiMotionPath' })(MotionPath)
