import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Polygon from '../components/Polygon'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rectangle: {
    strokeWidth: 3
  }
})

class Example extends Component {
  handleOnClick = event => {
    console.log(event)
  }

  render () {
    return (
      <Svg width={500} height={500} viewBox={[0, 0, 200, 200]}>
        <Polygon points={[{ x: 0, y: 100 }, { x: 50, y: 25 }, { x: 50, y: 75 }, { x: 100, y: 0 }]} />
        <Polygon points={[{ x: 100, y: 100 }, { x: 150, y: 25 }, { x: 150, y: 75 }, { x: 200, y: 0 }]} fill='none' stroke='black' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
