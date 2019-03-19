import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { pointsPropType, formatPoints } from './properties'

export const styles = {
  root: {
  }
}

class Polyline extends Component {
  render () {
    const {
      classes,
      className,
      children,
      points,
      pathLength,
      ...other
    } = this.props

    return (
      <polyline
        className={clsx(classes.root, className)}
        points={formatPoints(points)}
        pathLength={pathLength}
        {...other}
      >
        {children}
      </polyline>
    )
  }
}

Polyline.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  points: pointsPropType.isRequired,
  pathLength: PropTypes.number
}

Polyline.defaultProps = {
  pathLength: null
}

export default withStyles(styles, { name: 'MuiPolyline' })(Polyline)
