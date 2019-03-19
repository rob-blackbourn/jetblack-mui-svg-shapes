import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '../components/Svg'
import ClipPath from '../components/ClipPath'
import Circle from '../components/Circle'
import Path from '../components/Path'
import Use from '../components/Use'

const styles = theme => ({
  '@keyframes openYourHeart': {
    from: { r: 0 },
    to: { r: '60px' }
  },
  circle: {
    'animation': 'openYourHeart 15s infinite'
  }
})

class Example extends Component {
  render () {
    const { classes } = this.props

    return (
      <Svg className={classes.svg} width={800} height={800} viewBox={[0, 0, 100, 100]}>
        <ClipPath id='myClip'>
          <Circle className={classes.circle} cx={40} cy={35} r={35} />
        </ClipPath>

        <Path id='heart' d='M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z' />

        <Use clipPath='url(#myClip)' xlinkHref='#heart' fill='red' />
      </Svg>
    )
  }
}

export default withStyles(styles)(Example)
