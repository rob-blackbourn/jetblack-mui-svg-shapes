import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Rectangle from '../components/Rectangle'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800}>
        <Rectangle x={0} y={0} width={100} height={100} />
        <Rectangle x={120} y={0} width={100} height={100} rx={15} ry={15} />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
