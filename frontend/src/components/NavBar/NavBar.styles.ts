import { createStyles, Theme } from "@material-ui/core/styles"

export const styles = (theme: Theme) => createStyles({
  navbar: {
    [theme.breakpoints.up('md')]: {
      minWidth: 960,
      margin: "auto",
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: 1100,
      margin: "auto",
    },
  },
  fullWidthButton: {
    width: "100%",
  },
  menuLogo: {
    fontSize: 20,
    padding: 5,
    marginTop: 2,
    marginRight: 15,
    userSelect: "none",
  },
  menuLogoIcon: {
    fontSize: 30,
    marginTop: 7,
    marginLeft: 15,
    marginRight: 5,
    userSelect: "none",
  },
  menuItem: {
    fontSize: 16,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    textTransform: "uppercase",
  },
})