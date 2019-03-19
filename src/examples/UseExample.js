import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Circle from '../components/Circle'
import Use from '../components/Use'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg viewBox={[0, 0, 30, 10]}>
        <Circle id='myCircle' cx={5} cy={5} r={4} />
        <Use href='#myCircle' x={10} fill='blue' />
        <Use href='#myCircle' x={20} fill='white' stroke='blue' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
