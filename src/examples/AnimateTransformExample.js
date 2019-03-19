import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import AnimateTransform from '../components/AnimateTransform'
import Polygon from '../components/Polygon'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={120} height={120} viewBox={[0, 0, 120, 120]}>
        <Polygon points={[{ x: 60, y: 30 }, { x: 90, y: 90 }, { x: 30, y: 90 }]}>
          <AnimateTransform attributeName='transform' attributeType='XML' type='rotate' from={[0, 60, 70]} to={[360, 60, 70]} dur='10s' repeatCount='indefinite' />
        </Polygon>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
