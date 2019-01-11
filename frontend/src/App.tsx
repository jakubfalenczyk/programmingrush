import * as React from "react"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import { AppBar, IconButton, Toolbar, Typography, Button } from "@material-ui/core"
import { Menu } from "@material-ui/icons"

import { styles } from "./App.styles" 

interface IAppProps extends WithStyles<typeof styles> {}

class App extends React.Component<IAppProps> {
  render() {
    const { classes } = this.props

    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Menu/>
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(App)
