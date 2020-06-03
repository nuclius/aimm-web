import React, { Component } from "react";
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

import "./style.scss";

class AppFooter extends Component {
  render() {
    return (
      <div className="app-footer">
        <div style={{ maxWidth: 1100 }} className="mx-auto">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="menu-column">
              <p className="menu-title">LEARN MORE</p>
              <ul>
                <li>
                  <a href="#">Policies</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div className="menu-column">
              <p className="menu-title">COMPANY</p>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">The AIMM System</a>
                </li>
              </ul>
            </div>
            <div className="menu-column"></div>
            <div className="menu-column">
              <p className="menu-title">CONTACT</p>
              <ul>
                <li>
                  <a href="#">8309 Tujunga Ave</a>
                </li>
                <li>
                  <a href="#">Suite #201</a>
                </li>
                <li>
                  <a href="#">Sun Valley, CA 91352</a>
                </li>
                <li>
                  <a href="#">818.252.0808</a>
                </li>
                <li>
                  <a href="#">max@aimmsystem.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="menu-column">
              <p className="menu-title">JOIN OUR COMMUNITY</p>
              <ul>
                <li className="d-inline mr-4">
                  <a href="#">LinkedIn</a>
                </li>
                <li className="d-inline mr-4">
                  <a href="#">Facebook</a>
                </li>
                <li className="d-inline">
                  <a href="#">Twitter</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-5">© 2020 AIMM System INC. All Rights Reserved.</p>
        </div>
      </div>
    );
  }
}

export default AppFooter;
