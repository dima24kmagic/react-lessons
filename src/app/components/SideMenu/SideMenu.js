import React, { useState } from "react";
import PropTypes from "prop-types";
import { MenuList, SwipeableDrawer, withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import cn from "classnames";
import Typography from "@material-ui/core/Typography";
import { NavLink } from "react-router-dom";

const propTypes = {
  /** Which side menu should be draggable from*/
  side: PropTypes.oneOf(["right"]),
  /** Items in menu */
  links: PropTypes.arrayOf(
    PropTypes.shape({
      /** link path */
      to: PropTypes.string,
      /** Text of a link */
      text: PropTypes.string
    })
  ),
  /** @ignore */
  classes: PropTypes.shape().isRequired
};

const defaultProps = {
  side: "right",
  links: []
};

const styles = {
  menu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "70vw"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  navLink: {
    textDecoration: "none"
  },
  intro: {
    color: "#121212"
  },
  itemIntro: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    margin: "16px 0"
  },
  burgerWrapper: {
    position: "fixed",
    top: 32,
    right: 32,
    height: 48,
    width: 48,
    background: "rgba(0,0,0,.1)"
  }
};

/**
 * Side Menu
 */
function SideMenu({ classes, side, links }) {
  const [isOpen, setIsOpen] = useState(true);
  const onCloseMenu = () => {
    setIsOpen(false);
  };
  const onOpenMenu = () => {
    setIsOpen(true);
  };
  return (
    <Grid container>
      <Grid item className={classes.burgerWrapper} />
      <SwipeableDrawer
        onClose={onCloseMenu}
        onOpen={onOpenMenu}
        open={isOpen}
        anchor={side}
      >
        <MenuList className={classes.menu}>
          <MenuItem className={classes.itemIntro}>
            <NavLink to="/" className={classes.navLink}>
              <Typography variant="display1" className={classes.intro}>
                React Guide
              </Typography>
            </NavLink>
          </MenuItem>
          {links.map(link => (
            <NavLink
              className={cn(classes.navLink, classes.item)}
              to={link.to}
              onClick={onCloseMenu}
              key={link.to}
            >
              <MenuItem className={classes.item}>{link.text}</MenuItem>
            </NavLink>
          ))}
        </MenuList>
      </SwipeableDrawer>
    </Grid>
  );
}

SideMenu.propTypes = propTypes;
SideMenu.defaultProps = defaultProps;

const enhance = withStyles(styles);

export default enhance(SideMenu);
