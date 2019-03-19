import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Polygon from '../components/Polygon'
import Definition from '../components/Definition'
import Pattern from '../components/Pattern'
import Circle from '../components/Circle'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800} viewBox={[0, 0, 230, 100]}>
        <Definition>
          <Pattern id='star' viewBox={[0, 0, 10, 10]} width='10%' height='10%'>
            <Polygon points={[{ x: 0, y: 0 }, { x: 2, y: 5 }, { x: 0, y: 10 }, { x: 5, y: 8 }, { x: 10, y: 10 }, { x: 8, y: 5 }, { x: 10, y: 0 }, { x: 5, y: 2 }]} />
          </Pattern>
        </Definition>

        <Circle cx={50} cy={50} r={50} fill='url(#star)' />
        <Circle cx={180} cy={50} r={40} fill='none' strokeWidth={20} stroke='url("#star")' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
