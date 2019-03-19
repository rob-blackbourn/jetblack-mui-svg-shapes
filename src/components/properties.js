import PropTypes from 'prop-types'

export const preserveAspectRatioPropType = PropTypes.shape({
  align: PropTypes.oneOf(['none', 'xMinYMin', 'xMidYMin', 'xMaxYMin', 'xMinYMid', 'xMidYMid', 'xMaxYMid', 'xMinYMax', 'xMidYMax', 'xMaxYMax']).isRequired,
  meetOrSlice: PropTypes.oneOf(['meet', 'slice'])
})

export function formatPreserveAspecRatio (preserveAspectRatio) {
  return preserveAspectRatio.align + (preserveAspectRatio.meetOrSlice ? ' ' + preserveAspectRatio.meetOrSlice : '')
}

export const pointsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
)

export function formatPoints (points) {
  return points.map(item => `${item.x},${item.y}`).join(' ')
}
