import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Group from '../components/Group'
import Circle from '../components/Circle'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800}>
        <Group fill='white' stroke='green' strokeWidth={5}>
          <Circle cx={40} cy={40} r={25} />
          <Circle cx={60} cy={60} r={25} />
        </Group>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
