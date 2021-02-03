import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import data from "../data/questions.json";
import NoMatch from './NoMatch';
import LandingPageContainer from '../Modules/landing-page/container/LandingPageContainer';
import HeaderComponent from '../Modules/common/HeaderComponent';
import FooterComponent from '../Modules/common/FooterComponent';
import QuizzContainer from '../Modules/quizz/container/QuizzContainer';
import QuestionComponent from '../Modules/quizz/components/QuestionComponent';

function Routing() {
    return (
      <Router>

        <HeaderComponent />

        <Switch>
            <Route exact path="/">
                <LandingPageContainer />
            </Route>
            <Route exact path="/quizz">
                <QuizzContainer questionsData={data} />
            </Route>
            <Route  path="/quizz/:id">
                <QuestionComponent questionData={data} />
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