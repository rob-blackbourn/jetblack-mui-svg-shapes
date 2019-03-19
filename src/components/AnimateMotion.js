import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class AnimateMotion extends Component {
  render () {
    const {
      children,
      classes,
      className,
      ...others
    } = this.props

    return (
      <animateMotion
        className={clsx(classes.root, className)}
        {...others}
      >
        {children}
      </animateMotion>
    )
  }
}

AnimateMotion.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

AnimateMotion.defaultProps = {
}

export default withStyles(styles, { name: 'MuiAnimateMotion' })(AnimateMotion)
