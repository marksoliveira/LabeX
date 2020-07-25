import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import HomePage from './pages/HomePage';
import AplicationPage from './pages/ApplicationPage';
import LoginPage from './pages/LoginPage';
import CreateTripPage from './pages/CreateTripPage';
import TripsListPage from './pages/TripsListPage';
import TripDetailsPage from './pages/TripDetailsPage';

const Router = () => {
  return (
    <div className="AppRouter">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/inscricao">
            <AplicationPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/viagens/criar">
            <CreateTripPage />
          </Route>
          <Route exact path="/viagens">
            <TripsListPage />
          </Route>
          <Route exact path="/viagens/detalhe/:tripId">
            <TripDetailsPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;