import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as ROUTES from './js/constants/routes';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './js/pages/home';
import Events from "./js/pages/events";
import Donations from './js/pages/donations';
import Groups from './js/pages/groups';
import Sermons from './js/pages/sermons';
import FAQ from './js/pages/faq';
import Magazines from './js/pages/magazines';
import PrayerWall from './js/pages/prayerWall';
import Terms from "./js/pages/terms";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home}/>
            <Route exact path={ROUTES.EVENTS} component={Events}/>
            <Route exact path={ROUTES.DONATIONS} component={Donations}/>
            <Route exact path={ROUTES.GROUPS} component={Groups}/>
            <Route exact path={ROUTES.SERMONS} component={Sermons}/>
            <Route exact path={ROUTES.PRAYER_WALL} component={PrayerWall}/>
            <Route exact path={ROUTES.FAQ} component={FAQ}/>
            <Route exact path={ROUTES.MAGAZINES} component={Magazines}/>
            <Route exact path={ROUTES.TERMS} component={Terms}/>
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
