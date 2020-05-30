import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Material UI Imports
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Component Imports
import AppHeader from "./components/common/Header";
import AppFooter from "./components/common/Footer";

// Page Imports
import HomePage from "./components/pages/Home";
import NoPageFound from "./components/pages/NoPageFound";
import SystemPage from "./components/pages/System";
import AboutPage from "./components/pages/About";

// Action Imports
import {setSettings} from "./actions/settings-actions";

// Local Storage Operations
import {getLocalSettings,setLocalSettings} from "./services/settingsOperations";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  constructor(props) {
    super(props);

    // Settings init
    let settings = getLocalSettings();
    if (settings===null || settings===undefined)
      setLocalSettings(this.props.settings);
    else
      this.props.setSettings(settings);

  }

  render() {

    const theme = createMuiTheme(this.props.settings);

    return (
        <MuiThemeProvider theme={theme}>
          <Router>
            <AppHeader/>
            <main>
              <Switch>
                <Route path={"/"} exact component={HomePage}/>
                <Route path={"/system"} exact  component={SystemPage}/>
                <Route path={"/about"} exact  component={AboutPage}/>
                <Route exact component={NoPageFound}/>
              </Switch>
            </main>
            <AppFooter/>
          </Router>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {...state,...props};
};

const mapDispatchToProps = {
  setSettings
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
