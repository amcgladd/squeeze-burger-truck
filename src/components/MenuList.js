import React from "react";
import '../assets/styles/MenuList.scss';
import menu from '../assets/logos/MENU.png';

function MenuList(){

  return (
    <div className="slide2">
    <div className="menu-banner">
      <div className="banner-underline">
        <img src={menu}/>
      </div>
    </div>
    <div className="menu-container">
      <div className="main-menu">
        <h1>Mains</h1>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Squeeze Burger</h3><h3> 8</h3>
            </div>
              <p>lettuce, tomato, pickles, onion, mayo, mustard</p>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Squeeze With Cheese</h3><h3> 10</h3>
            </div>
              <p>lettuce, tomato, pickles, onion, mayo, mustard, cheese</p>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Cali Chicken Sandwich</h3><h3> 9</h3>
            </div>
              <p>bacon, mayo, avocado, onion, lettuce, tomatoes</p>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Veggie Burger</h3><h3> 9</h3>
            </div>
              <p>lettuce, tomato, pickles, onion, mayo, mustard, cheese</p>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Hotdog</h3><h3> 8</h3>
            </div>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Grilled Cheese</h3><h3> 7</h3>
            </div>
          </div>
          <div className="menu-spacing">
            <div className="menu-title-flex">
              <h3>Make It A Combo</h3><h3> +4</h3>
            </div>
              <p>includes your choice of side and drink</p>
          </div>
        </div>
        <div className="sides-menu">
          <h1>Sides</h1>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Fries</h3><h3> 5</h3>
              </div>
            </div>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Onion Rings</h3><h3> 5</h3>
              </div>
            </div>
            <div className="menu-spacing">
              <div className="menu-title-flex">
                <h3>Drinks</h3><h3> 2</h3>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MenuList;
