import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class AnimateTransform extends Component {
  render () {
    const {
      classes,
      className,
      children,
      attributeType,
      attributeName,
      type,
      from,
      to,
      dur,
      repeatCount,
      ...other
    } = this.props

    return (
      <animateTransform
        className={clsx(classes.root, className)}
        attributeType={attributeType} attributeName={attributeName}
        type={type} from={from} to={to} dur={dur} repeatCount={repeatCount}
        {...other}
      >
        {children}
      </animateTransform>
    )
  }
}

AnimateTransform.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  attributeType: PropTypes.oneOf(['CSS', 'XML', 'auto']).isRequired,
  attributeName: PropTypes.string.isRequired,
  type: PropTypes.string,
  from: PropTypes.any.isRequired,
  to: PropTypes.any.isRequired,
  dur: PropTypes.string.isRequired,
  repeatCount: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['indefinite'])])
}

AnimateTransform.defaultProps = {
}

export default withStyles(styles, { name: 'MuiAnimateTransform' })(AnimateTransform)
