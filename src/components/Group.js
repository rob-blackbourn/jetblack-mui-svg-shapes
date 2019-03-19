import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Group extends Component {
  render () {
    const {
      classes,
      className,
      children,
      ...other
    } = this.props

    return (
      <g
        className={clsx(classes.root, className)}
        {...other}
      >
        {children}
      </g>
    )
  }
}

Group.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node
}

Group.defaultProps = {
}

export default withStyles(styles, { name: 'MuiGroup' })(Group)
