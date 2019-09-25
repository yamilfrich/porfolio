/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import { Link, navigate } from "gatsby";
import React from "react";
import Logo from "./logo";
import {
  IconButton,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {
  MdMenu,
  MdChevronLeft,
  MdChevronRight,
  MdHome,
  MdWork
} from "react-icons/md";
import { FaSignOutAlt, FaSignInAlt, FaFlag } from "react-icons/fa";

const drawerWidth = 240;

const HOME = { text: "Home", link: "/" };
const PROJECTS = { text: "Projects", link: "/projects" };
const LOGIN = { text: "Login", link: "/login" };
const REGISTER = { text: "Register", link: "/register" };
const LOGOUT = { text: "Logout", link: "/logout" };
const links1 = [HOME, PROJECTS];
const links2 = [LOGIN, REGISTER, LOGOUT];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start"
    }
  })
);

const Header = ({ siteTitle = `` }: { siteTitle?: string }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuItemIcon = (text: string): React.ReactElement => {
    switch (text) {
      case "Home":
        return <MdHome />;
      case "Projects":
        return <MdWork />;
      case "Login":
        return <FaSignInAlt />;
      case "Register":
        return <FaFlag />;
      case "Logout":
        return <FaSignOutAlt />;
      default:
        return <React.Fragment />;
    }
  };

  return (
    <React.Fragment>
      <header>
        <Link to="/">
          <Logo siteTitle={siteTitle} />
        </Link>
        <div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            css={hideStyle(open)}
          >
            <MdMenu />
          </IconButton>
        </div>
      </header>
      <Drawer
        css={drawerStyle}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <MdChevronLeft /> : <MdChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {links1.map(link => (
            <ListItem
              button={true}
              key={link.text}
              onClick={() => {
                navigate(link.link);
              }}
            >
              <ListItemIcon>{menuItemIcon(link.text)}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {links2.map(link => (
            <ListItem
              button={true}
              key={link.text}
              onClick={() => {
                navigate(link.link);
              }}
            >
              <ListItemIcon>{menuItemIcon(link.text)}</ListItemIcon>
              <ListItemText primary={link.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

const hideStyle = (open: boolean) =>
  css({
    display: open ? "none" : "inline-flex"
  });

const drawerStyle = css({
  width: drawerWidth,
  flexShrink: 0
});

export default Header;
