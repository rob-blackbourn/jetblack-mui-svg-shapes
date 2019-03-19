import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import Hyperlink from '../components/Hyperlink'
import Circle from '../components/Circle'
import Text from '../components/Text'

const styles = theme => ({
  hyperlink: {
    cursor: 'pointer',
    '&:hover': {
      outline: 'dotted 1px blue'
    }
  },
  text: {
    fill: 'blue',
    textDecoration: 'underline'
  }
})

class Example extends Component {
  render () {
    const { classes } = this.props

    return (
      <Svg width={800} height={800} viewBox={[0, 0, 100, 100]}>
        <Hyperlink className={classes.hyperlink} href='https://developer.mozilla.org/docs/Web/SVG/Element/circle'>
          <Circle cx={50} cy={40} r={35} />
        </Hyperlink>

        <Hyperlink className={classes.hyperlink} href='https://developer.mozilla.org/docs/Web/SVG/Element/circle'>
          <Text className={classes.text} x={50} y={90} textAnchor='middle'>
            &lt;Circle&gt;
          </Text>
        </Hyperlink>
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
