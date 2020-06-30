
//Bacics

import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
//Selectors
import {createStructuredSelector} from 'reselect' 
import {selectCurrentUser} from './redux/user/user.selectors'
// Pages
import HomePage from './Pages/Homepage/Homepage.comp.js';
import ShopPage from './Pages/shop/shop.component.js';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.comp';
import AboutPage from './Pages/AboutPage/aboutpage.comp';
import CheckoutPage from './Pages/checkoutPage/checkout-page.comp'
// Components
import Header from './Components/header/header-comp.js';
import { auth, createUserProfileDocument} from './Firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';
//Main App


class App extends React.Component {

  unSubscribeFromAuth = null;


  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
          
        }
      else {setCurrentUser(userAuth)} 
    });

  }


  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  
  render() {return (
    <div>
    <Header />
      <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/shop" component={ShopPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route 
              exact 
              path="/signin" 
              render={() => 
                this.props.currentUser ? 
                (<Redirect to='/' />) 
                : 
                (<SignInAndSignUpPage />) 
              } 
            />
      </Switch> 
    </div>
  );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser 
});


const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

});

export default connect(mapStateToProps, mapDispatchToProps)(App);
