import React from 'react';
import './styles.scss'
import IconBag from '../../assets/icons/shopping-bag.png';
import Logo from '../../assets/icons/king.png';
import { Link } from 'react-router-dom';
import CartPopup from '../CartPopUp';

//state ES6 JS

class Navbar extends React.Component {
  // logic part of our component
  constructor () {
    super ()
    this.state = {
      show: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  // handles click
  handleClick () {
    const showState = this.state.show;
    this.setState({show: !showState})
  }

  render () {
    // our presentational part
    return (
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/logo">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
          <a href="#">Sign In</a>
          <img onClick={this.handleClick} src={IconBag} alt="bag" />
        </div>
        {
          this.state.show ? (<CartPopup />) : null
        }
      </div>
    )
  }
}


export default Navbar;
// JSX-means = JavaScript in XML