import classNames from "classnames"
import * as React from "react"
import { Fragment } from "react"
import { withStyles, WithStyles } from "@material-ui/core/styles"
import { 
  Typography,
  Grid,
  Button,
} from "@material-ui/core"

import { styles } from "./NavBar.styles" 

interface INavItemsProps extends WithStyles<typeof styles, true> {
  isSmallScreen?: boolean
}

function NavItems(props: INavItemsProps) {
  const { classes, isSmallScreen } = props
  const buttonClassName = classNames(isSmallScreen && classes.fullWidthButton)

  return (
    <Fragment>
      <Grid item>
        <Button color="inherit" className={buttonClassName}>
          <Typography color="inherit" className={classes.menuItem}>
            Videos
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" className={buttonClassName}>
          <Typography color="inherit" className={classes.menuItem}>
            Courses
          </Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button color="inherit" className={buttonClassName}>
          <Typography color="inherit" className={classes.menuItem}>
            About
          </Typography>
        </Button>
      </Grid>
    </Fragment>
  )
}

export default withStyles(styles, { withTheme: true })(NavItems)