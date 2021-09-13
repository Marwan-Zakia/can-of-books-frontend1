import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import BestBook from './BestBooks';
import { withAuth0 } from '@auth0/auth0-react';
import Profile from './Components/Profile';
import Login from './Login';
import books from './books';
class App extends React.Component {

  render() {
    console.log('app', this.props);
    return (
      <>

        <Router>
          {/* <IsLoadingAndError> */}
          <Header />
          <Switch>
            <Route exact path="/">
              {this.props.auth0.isAuthenticated ? <BestBook /> : <Login/>}
            </Route>
            <Route path="/Profile">
              <Profile />
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
          </Switch>

          <Footer />

          {/* </IsLoadingAndError> */}
        </Router>


      </>
    );
  }
}


export default withAuth0(App);

