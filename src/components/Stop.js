import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Stop extends Component {
  render () {
    const {
      classes,
      className,
      children,
      offset,
      stopColor,
      stopOpacity,
      ...other
    } = this.props

    return (
      <stop
        className={clsx(classes.root, className)}
        offset={offset} stopColor={stopColor} r={stopOpacity}
        {...other}
      >
        {children}
      </stop>
    )
  }
}

Stop.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  stopColor: PropTypes.string.isRequired,
  stopOpacity: PropTypes.number
}

Stop.defaultProps = {
  stopOpacity: 1.0
}

export default withStyles(styles, { name: 'MuiStop' })(Stop)
