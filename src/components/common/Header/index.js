import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "assets/img/logo.png";
import "./style.scss";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
});

class AppHeader extends Component {
  state = {
    isDrawerOpen: false,
    isOpen: false,
  };

  toggleDrawer = (open) => () => {
    this.setState({
      isDrawerOpen: open,
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }

  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("aimm-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  render() {
    const { classes } = this.props;
    const { isOpen } = this.state;
    const path = this.props.location.pathname;

    return (
      <div className={classes.root}>
        <Navbar
          color="white"
          fixed="top"
          light
          expand="md"
          id="aimm-header"
          className="aimm-header"
        >
          <NavbarBrand href="/">
            <img src={logo} width="100" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto ml-3" navbar>
              <NavItem>
                <NavLink active={path == "/"} href="/">
                  HOME
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={path.includes("system") ? true : false}
                  href="/system"
                >
                  THE AIMM SYSTEM
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">HOW IT WORKS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  active={path.includes("about") ? true : false}
                  href="/about"
                >
                  ABOUT
                </NavLink>
              </NavItem>
            </Nav>
            <div className="auth-buttons">
              <Button
                variant="outlined"
                color="primary"
                className="aimm-outlinedPrimary mr-2"
              >
                SIGN IN
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="aimm-primary"
              >
                REQUEST A DEMO
              </Button>
            </div>
          </Collapse>
        </Navbar>
        {/* <TemporaryDrawer
                    isDrawerOpen={this.state.isDrawerOpen}
                    toggleDrawer={this.toggleDrawer}
                /> */}
      </div>
    );
  }
}

export default withRouter(withStyles(styles)(AppHeader));
