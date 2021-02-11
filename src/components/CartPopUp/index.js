import React from 'react';
import './styles.scss';
import Buttons from '../../components/Buttons'

//class componenet
class CartPopup extends React.Component {
  render() {
    return (
      <div className="cart-popup-container">
        <Buttons>Go to checkout</Buttons>
      </div>
    )
  }
}

export default CartPopup;