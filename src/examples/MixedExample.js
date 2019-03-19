import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Rectangle from '../components/Rectangle'
import Text from '../components/Text'

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
    const { classes } = this.props

    return (
      <Svg width={800} height={800}>
        <Rectangle className={classes.rectangle} x={10} y={10} width={200} height={100} rx={5} ry={5} stroke='blue' fill='yellow' onClick={this.handleOnClick} />
        <Text x={30} y={50}>JPM FIX Engine</Text>
        <Rectangle className={classes.rectangle} x={400} y={10} width={200} height={100} rx={5} ry={5} stroke='blue' fill='yellow' onClick={this.handleOnClick} />
        <Text x={430} y={50}>Fill Listener</Text>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
