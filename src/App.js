import React from 'react';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Header from './Components/UI/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PageNotFound from './pages/404/PageNotFound';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Footer from './Components/UI/Footer/Footer';
import DashBoard from './pages/DashBoard/DashBoard';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './utils/PrivateRoute/PrivateRoute';
import Checkout from './pages/Checkout/Checkout';
import OrderConfirmed from './pages/OrderConfirmed/OrderConfirmed';
import AllBikes from './pages/AllBikes/AllBikes';



function App() {

  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/allbikes">
            <AllBikes />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/orderConfirmed">
            <OrderConfirmed />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <DashBoard />
          </PrivateRoute>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
