import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import NoMatch from './NoMatch';
import LandingPageContainer from '../Modules/landing-page/container/LandingPageContainer';
import QuizzContainer from '../Modules/quizz/container/QuizzContainer';
import HeaderComponent from '../Modules/common/HeaderComponent';
import FooterComponent from '../Modules/common/FooterComponent';


function Routing() {
    return (
      <Router>

        <HeaderComponent />

        <Switch>
            <Route exact path="/">
                <LandingPageContainer />
            </Route>
            <Route exact path="/quizz">
                <QuizzContainer />
            </Route>
            <Route path="*">
                <NoMatch />
            </Route>
        </Switch>

        <FooterComponent />

      </Router>
    );
}

export default Routing;