import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Line from '../components/Line'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      // If you do not specify the stroke color the line will not be visible
      <Svg width={800} height={800}>
        <Line x1={0} y1={80} x2={100} y2={20} stroke='black' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
