import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'

export const styles = {
  root: {
  }
}

class Hyperlink extends Component {
  render () {
    const {
      classes,
      className,
      children,
      href,
      target,
      ...other
    } = this.props

    return (
      <a
        className={clsx(classes.root, className)}
        href={href}
        target={target}
        {...other}
      >
        {children}
      </a>
    )
  }
}

Hyperlink.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  download: PropTypes.string,
  href: PropTypes.string.isRequired,
  hreflang: PropTypes.string,
  ping: PropTypes.string,
  referrerpolicy: PropTypes.string,
  rel: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_parent', '_top', '_blank']),
  type: PropTypes.string
}

Hyperlink.defaultProps = {
  target: '_self'
}

export default withStyles(styles, { name: 'MuiHyperlink' })(Hyperlink)
