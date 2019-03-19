import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Title extends Component {
  render () {
    const {
      classes,
      className,
      children,
      ...other
    } = this.props

    return (
      <title
        className={clsx(classes.root, className)}
        {...other}
      >
        {children}
      </title>
    )
  }
}

Title.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
}

Title.defaultProps = {
}

export default withStyles(styles, { name: 'MuiTitle' })(Title)
