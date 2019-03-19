import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Rectangle from '../components/Rectangle'
import Animate from '../components/Animate'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={120} height={120} viewBox={[0, 0, 120, 120]}>
        <Rectangle x={10} y={10} rx={0} ry={0} width={100} height={100}>
          <Animate attributeType='XML' attributeName='x' from={-100} to={120} dur='10s' repeatCount='indefinite' />
        </Rectangle>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
