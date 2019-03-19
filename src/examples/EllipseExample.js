import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Ellipse from '../components/Ellipse'

const styles = theme => ({
})

class Example extends Component {
  render () {
    return (
      <Svg width={800} height={800}>
        <Ellipse cx={100} cy={50} rx={100} ry={50} />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
