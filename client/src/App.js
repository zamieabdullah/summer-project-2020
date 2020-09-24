import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterPage from './pages/Register/RegisterPage';
import HomePage from './pages/Home/HomePage';
import MeetingsPage from './pages/Meetings/MeetingsPage'


export default (props) => {
    return (
      <div className='h-100'>
        <Router>
          <Switch>
            <Route exact path="/">
              {/*<Redirect to="/home" />*/}
              <RegisterPage />
            </Route>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/meetings">
              <MeetingsPage />
            </Route>
            <Route path='*'>
              <h1>Not Found</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
