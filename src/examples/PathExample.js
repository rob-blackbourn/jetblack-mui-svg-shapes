import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Path from '../components/Path'

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
      <Svg width={500} height={500} viewBox={[0, 0, 100, 100]}>
        <Path d='M 10,30
           A 20,20 0,0,1 50,30
           A 20,20 0,0,1 90,30
           Q 90,60 50,90
           Q 10,60 10,30 z' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
