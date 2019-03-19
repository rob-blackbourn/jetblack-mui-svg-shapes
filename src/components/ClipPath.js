import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class ClipPath extends Component {
  render () {
    const {
      classes,
      className,
      children,
      ...other
    } = this.props

    return (
      <clipPath
        className={clsx(classes.root, className)}
        {...other}
      >
        {children}
      </clipPath>
    )
  }
}

ClipPath.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

ClipPath.defaultProps = {
}

export default withStyles(styles, { name: 'MuiClipPath' })(ClipPath)
