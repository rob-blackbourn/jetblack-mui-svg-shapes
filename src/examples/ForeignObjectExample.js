import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import ForeignObject from '../components/ForeignObject'
import Polygon from '../components/Polygon'

const styles = theme => ({
  polygon: {
    fill: 'black'
  },
  div: {
    color: 'white',
    font: '18px serif',
    height: '100%',
    overflow: 'auto'
  }
})

class Example extends Component {
  render () {
    const { classes } = this.props

    return (
      <Svg width={800} height={800} viewBox={[0, 0, 200, 200]}>
        <Polygon className={classes.polygon} points={[{ x: 5, y: 5 }, { x: 195, y: 10 }, { x: 185, y: 185 }, { x: 10, y: 195 }]} />

        <ForeignObject x={20} y={20} width={160} height={160}>
          <div className={classes.div}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed mollis mollis mi ut ultricies. Nullam magna ipsum,
            porta vel dui convallis, rutrum imperdiet eros. Aliquam
            erat volutpat.
          </div>
        </ForeignObject>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
