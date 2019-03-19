# @jetblack/mui-svg-shapes

An SVG shape library for material ui react.

## Usage

First create the react app.

```bash
~$ npx create-react-app my-app
~$ cd my-app
~/my-app$
```

Then add the package.

```bash
~/my-app$ npm install @jetblack/mui-svg-shapes
```

Change the `src/App.js` to have the following content:

```js
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Svg from '@jetblack/mui-svg-shapes'
import Circle from '@jetblack/mui-svg-shapes'

const styles = theme => ({
})

class App extends Component {
  render() {
    return (
      <Svg width={800} height={800}>
        <Circle cx={50} cy={50} r={50} />
      </Svg>
    )
  }
}

export default withStyles(styles)(App)
```