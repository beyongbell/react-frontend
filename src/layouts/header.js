import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import IconButton from "@mui/material/IconButton";
import useMediaQuery from '@mui/material/useMediaQuery';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Badge from '@mui/material/Badge';
 
import search from "@images/search.svg";
import cartIcon from "@images/cart.svg";
import account from "@images/account-header.svg";
import menu from "@images/menu.svg";

import { makeStyles } from "tss-react/mui";

import { Link } from "gatsby"

const useStyles = makeStyles()((theme) => {
  return {
    coloredIndicator: {
      backgroundColor: "#fff",
    },
    logo: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "3rem",
      },
    },
    logoText: {
      color: theme.palette.common.offBlack,
    },
    logoContainer: {
      [theme.breakpoints.down("md")]: {
        marginRight: "auto",
      },
    },
    tab: {
      ...theme.typography.body1,
      fontWeight: 500,
    },
    tabs: {
      marginLeft: "auto",
      marginRight: "auto",
    },
    icon: {
      height: "3rem",
      width: "3rem",
      [theme.breakpoints.down("xs")]: {
        height: "2rem",
        width: "2rem",
      },
    },
    drawer: {
      backgroundColor: theme.palette.primary.main,
    },
    listItemText: {
      color: "#fff",
    },
  };
});

const Header = ({ categories }) => {
  const { classes } = useStyles();

  const matchesMD = useMediaQuery(theme => theme.breakpoints.down("md"))

  const [drawerOpen, setDrawerOpen] = useState(false)

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const routes = [...categories, { name: 'Contact Us', strapi_id: "contact", link: '/contact' }];

  const activeIndex = () => {
    const pathname = typeof window !== "undefined" ? window.location.pathname.split("/")[1] : null
    const found = routes.indexOf(routes.find((route) => (route.link || `/${route.name.toLowerCase()}`) === `/${pathname}`))
    return found === -1 ? false : found
  }

  const tabs = (
    <Tabs value={activeIndex()} classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
      { routes.map(route => 
        <Tab 
          component={Link}
          to={route.link || `/${route.name.toLowerCase()}`}
          classes={{ root: classes.tab }} 
          label={route.name} key={route.strapi_id} 
        />)
      }
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer 
      open={drawerOpen} 
      onOpen={() => setDrawerOpen(true)} 
      onClose={() => setDrawerOpen(false)} 
      disableBackdropTransition={!iOS} 
      disableDiscovery={iOS}
      classes={{ paper: classes.drawer }}
      >
      <List disablePadding>
        {routes.map((route, i) => 
          <ListItem
            selected={activeIndex() === i} 
            component={Link}
            to={route.link || `/${route.name.toLowerCase()}`}
            divider
            button
            key={route.strapi_id}
          >
            <ListItemText 
              classes={{primary: classes.listItemText }} 
              primary={route.name}
            />
          </ListItem>
        )}
      </List>
    </ SwipeableDrawer>
  )

  const actions = [
    { icon: search,   alt: "search",  visible: true, onClick: () => console.log("search") },
    { icon: cartIcon, alt: "cart",    visible: true, link: "/cart" },
    { icon: account,  alt: "account", visible: !matchesMD, link: "/account" },
    { icon: menu,     alt: "menu",    visible: matchesMD, onClick: () => setDrawerOpen(true) },
  ]

  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar>
        <Button component={Link} to="/">
          <Typography variant="h1">
            <span className={classes.logoText}> VAR </span> X
          </Typography>
        </Button>
        { matchesMD ? drawer : tabs }
        { actions.filter(action => action.visible).map(action => {
          const image = (<img className={classes.icon} src={action.icon} alt={action.alt} />)
          return (
            <IconButton
              key={action.alt} 
              onClick={action.onClick} 
              component={action.onClick ? undefined : Link} 
              to={action.onClick ? undefined : action.link}
            > { action.alt === "cart" ? (<Badge overlap="circular" classes={{ badge: classes.badge }}>{image}</Badge>) : (image) }
            </IconButton>
          )
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
