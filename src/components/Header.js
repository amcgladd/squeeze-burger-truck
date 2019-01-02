import React from "react";
import { Link } from 'react-router-dom';
import '../assets/styles/Header.scss';
import whiteLogo from '../assets/logos/squeeze_logo_white.png';
import burgerMenu from '../assets/logos/orange_burger_menu.png';
import { handleLogout, getCurrentUser } from '../actions';

function getButton() {
  if(getCurrentUser()){
    return <li onClick={handleLogout} className='logout-button' type='submit'>log out</li>
  } else {
    return <Link to="/login">log in</Link>
  }
}

function Header(){
  return (
    <div className="HeaderStyles">
        <ul className="nav-list">
          <a href="#home"><li className="nav-list">
            <Link to="/">home</Link>
          </li></a>
          <a href="#schedule"><li className="nav-list">schedule</li></a>
          <a href="#menu"><li className="nav-list">menu</li></a>
          <a href="#story"><li className="nav-list">story</li></a>
          <li>{getButton()}</li>
        </ul>
        <div>
          <button className="booking-button">
            <Link to="/booking">book catering</Link>
          </button>
        </div>
    </div>
  );
}

export default Header;
