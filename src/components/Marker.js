import React, { Component } from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import { preserveAspectRatioPropType, formatPreserveAspecRatio } from './properties'

export const styles = {
  root: {
  }
}

class Marker extends Component {
  render () {
    const {
      children,
      classes,
      className,
      refX,
      refY,
      viewBox,
      markerHeight,
      markerWidth,
      markerUnits,
      orient,
      preserveAspectRatio,
      ...others
    } = this.props

    return (
      <marker
        className={clsx(classes.root, className)}
        markerHeight={markerHeight} markerWidth={markerWidth} markerUnits={markerUnits} orient={orient}
        preserveAspectRatio={formatPreserveAspecRatio(preserveAspectRatio)}
        refX={refX} refY={refY}
        viewBox={viewBox}
        {...others}
      >
        {children}
      </marker>
    )
  }
}

Marker.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  markerHeight: PropTypes.number,
  markerWidth: PropTypes.number,
  markerUnits: PropTypes.string,
  orient: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto', 'auto-start-reverse'])]),
  preserveAspectRatio: preserveAspectRatioPropType.isRequired,
  refX: PropTypes.number,
  refY: PropTypes.number,
  viewBox: PropTypes.arrayOf(PropTypes.number)
}

Marker.defaultProps = {
  markerHeight: 3,
  markerWidth: 3,
  markerUnits: 'strokeWidth',
  orient: 0,
  preserveAspectRatio: { align: 'xMidYMid', meetOrSlice: 'meet' },
  refX: 0,
  refY: 0,
  viewBox: null
}

export default withStyles(styles, { name: 'MuiMarker' })(Marker)
