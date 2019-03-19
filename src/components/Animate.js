import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Animate extends Component {
  render () {
    const {
      classes,
      className,
      children,
      attributeType,
      attributeName,
      from,
      to,
      dur,
      repeatCount,
      ...other
    } = this.props

    return (
      <animate
        className={clsx(classes.root, className)}
        attributeType={attributeType} attributeName={attributeName}
        from={from} to={to} dur={dur} repeatCount={repeatCount}
        {...other}
      >
        {children}
      </animate>
    )
  }
}

Animate.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  attributeType: PropTypes.oneOf(['CSS', 'XML', 'auto']).isRequired,
  attributeName: PropTypes.string.isRequired,
  from: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
  dur: PropTypes.string.isRequired,
  repeatCount: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['indefinite'])])
}

Animate.defaultProps = {
}

export default withStyles(styles, { name: 'MuiAnimate' })(Animate)
