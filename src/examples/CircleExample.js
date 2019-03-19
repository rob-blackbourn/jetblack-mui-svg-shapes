import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Circle from '../components/Circle'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800}>
        <Circle cx={50} cy={50} r={50} />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
