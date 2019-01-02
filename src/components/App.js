import React, { Component } from 'react';
import Header from './Header';
import Admin from './Admin';
import Body from './Body';
import Booking from './Booking';
import Footer from './Footer';
import firebase from 'firebase';
import { connect } from 'react-redux';
import constants from './../constants';
import PropTypes from 'prop-types';
import * as actions from './../actions';
import { Switch, Route, withRouter } from 'react-router-dom';
import AddForm from './AddForm';
import AdminLogIn from './AdminLogIn';
import '../assets/styles/App.scss';


class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { dispatch } = this.props;
    const { watchFirebaseAddressesRef, watchFirebaseEditAddressesRef, watchFirebaseDeleteAddressesRef } = actions;
    dispatch(watchFirebaseAddressesRef());
    dispatch(watchFirebaseDeleteAddressesRef());
    dispatch(watchFirebaseEditAddressesRef());
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const {  watchFirebaseDeleteAddressesRef } = actions;
    dispatch(watchFirebaseDeleteAddressesRef());
  }

  hashLinkScroll() {
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
      }, 0);
    }
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <Switch>
          <Route
            exact path='/'
            render={ () =>
              <Body
                addresses={this.props.addresses}
              />
            }
          />
          <Route
            path='/login'
            render={ () =>
              <AdminLogIn
                firebase={firebase}
              />
            }
          />

          <Route
            path='/admin'
            render={ () =>
              <Admin
                addresses={this.props.addresses}
              />
            }
          />
          <Route
            path='/booking'
            render={ () =>
              <Booking/>
            }
          />
        </Switch>
        <Footer/>
      </div>
    );
  }
};

App.propTypes = {
  addresses: PropTypes.object
}

const mapStateToProps = state => {
  return {
    addresses: state.addresses
  };
};

export default withRouter(connect(mapStateToProps)(App));
