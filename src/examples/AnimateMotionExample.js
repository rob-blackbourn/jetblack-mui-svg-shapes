import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import uuidv4 from 'uuid/v4'
import Svg from '../components/Svg'
import Path from '../components/Path'
import Circle from '../components/Circle'
import AnimateMotion from '../components/AnimateMotion'
import MotionPath from '../components/MotionPath'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rectangle: {
    strokeWidth: 3
  }
})

class Example extends Component {
  constructor (props) {
    super(props)
    this.pathId = uuidv4()
  }

  handleOnClick = event => {
    console.log(event)
  }
  render () {
    console.log(this.pathRef)

    return (
      <Svg width={120} height={120} viewBox={[0, 0, 120, 120]}>

        <Path
          d='M10,110 A120,120 -45 0,1 110 10 A120,120 -45 0,1 10,110'
          stroke='lightgrey' strokeWidth={2} fill='none' id={this.pathId}
        />

        <Circle cx={10} cy={110} r={3} fill='lightgrey' />
        <Circle cx={110} cy={10} r={3} fill='lightgrey' />

        <Circle cx={null} cy={null} r={5} fill='red'>
          <AnimateMotion dur='5s' repeatCount='indefinite'>
            <MotionPath xlinkHref={`#${this.pathId}`} />
          </AnimateMotion>
        </Circle>

      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
