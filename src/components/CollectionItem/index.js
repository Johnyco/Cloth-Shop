import React from 'react';
import './styles.scss';

const CollectionItem = ({ img, name, price }) => {

  return (
    <div className="collection-container">
      <div className="collection-item-container">
        <img src={img} alt="..." />
      </div>
      <div className="collection-item-footer">
        <div className="footer-item-info">{name}</div>
        <div className="footer-item-info">{price}</div>
      </div>
    </div>
  )
}

export default CollectionItem;