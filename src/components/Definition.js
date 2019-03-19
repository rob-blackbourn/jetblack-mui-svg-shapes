import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Definition extends Component {
  render () {
    const {
      classes,
      className,
      children,
      ...other
    } = this.props

    return (
      <defs
        className={clsx(classes.root, className)}
        {...other}
      >
        {children}
      </defs>
    )
  }
}

Definition.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

Definition.defaultProps = {
}

export default withStyles(styles, { name: 'MuiDefinition' })(Definition)
