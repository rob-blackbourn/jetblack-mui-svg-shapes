import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Definition from '../components/Definition'
import Marker from '../components/Marker'
import Path from '../components/Path'
import Circle from '../components/Circle'
import Polyline from '../components/Polyline'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800} viewBox={[0, 0, 100, 100]}>
        <Definition>
          <Marker id='arrow' viewBox={[0, 0, 10, 10]} refX={5} refY={5} markerWidth={6} markerHeight={6} orient='auto-start-reverse'>
            <Path d='M 0 0 L 10 5 L 0 10 z' />
          </Marker>
        </Definition>

        <Marker id='dot' viewBox={[0, 0, 10, 10]} refX={5} refY={5} markerWidth={5} markerHeight={5}>
          <Circle cx={5} cy={5} r={5} fill='red' />
        </Marker>

        <Polyline points={[{ x: 10, y: 10 }, { x: 10, y: 90 }, { x: 90, y: 90 }]} fill='none' stroke='black' markerStart='url(#arrow)' markerEnd='url(#arrow)' />

        <Polyline points={[{ x: 15, y: 80 }, { x: 29, y: 50 }, { x: 43, y: 60 }, { x: 57, y: 30 }, { x: 71, y: 40 }, { x: 85, y: 15 }]} fill='none' stroke='grey' markerStart='url(#dot)' markerMid='url(#dot)' markerEnd='url(#dot)' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
