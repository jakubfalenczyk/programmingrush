import * as React from "react"
import { useState, Fragment } from "react"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import { 
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import CodeIcon from "@material-ui/icons/Code"
import { unstable_useMediaQuery as useMediaQuery } from "@material-ui/core/useMediaQuery"

import { styles } from "./NavBar.styles" 
import NavItems from './NavItems';

interface INavBarProps extends WithStyles<typeof styles, true> {}

function NavBar(props: INavBarProps) {
  const { classes, theme } = props
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const [drawerState, setDrawerState] = useState(false)
  const openDrawer = () => setDrawerState(true)
  const closeDrawer = () => setDrawerState(false)
  
  return (
      <AppBar position="static">
        <Toolbar className={classes.navbar}>
          <Grid container justify="space-between">
            <Grid item>
              <Grid container>
                <Grid item>
                  <CodeIcon className={classes.menuLogoIcon}/>
                </Grid>
                <Grid item>
                  <Typography color="inherit" className={classes.menuLogo}>
                    programming rush
                  </Typography>
                </Grid>
              </Grid>  
            </Grid>
            <Grid item>
              {!isSmallScreen &&
                <Grid container>
                  <NavItems/>
                </Grid>
              }
              {isSmallScreen &&
                <Fragment>
                  <IconButton 
                    tabIndex={0}
                    color="inherit"
                    aria-label="Menu"
                    onClick={openDrawer}
                    onKeyDown={openDrawer}
                  >
                    <MenuIcon/>
                  </IconButton>
                  <SwipeableDrawer
                    color="primary"
                    anchor="top"
                    open={drawerState}
                    onClose={closeDrawer}
                    onOpen={openDrawer}
                  >
                    <Grid
                      tabIndex={0}
                      role="button"
                      onClick={closeDrawer}
                      container
                      direction="column"
                      alignItems="stretch"
                    >
                      <NavItems isSmallScreen={isSmallScreen}/>
                    </Grid>
                  </SwipeableDrawer>
                </Fragment>
              }
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
  ) 
}

export default withStyles(styles, { withTheme: true })(NavBar)
