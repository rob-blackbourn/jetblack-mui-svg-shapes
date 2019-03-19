import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Circle from '../components/Circle'
import Definition from '../components/Definition'
import LinearGradient from '../components/LinearGradient'
import Stop from '../components/Stop'
import Use from '../components/Use'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800} viewBox={[0, 0, 10, 10]}>
        <Definition>
          <Circle id='myCircle' cx={0} cy={0} r={5} />

          <LinearGradient id='myGradient' gradientTransform='rotate(90)'>
            <Stop offset='20%' stopColor='gold' />
            <Stop offset='90%' stopColor='red' />
          </LinearGradient>
        </Definition>

        <Use x={5} y={5} href='#myCircle' fill='url("#myGradient")' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
