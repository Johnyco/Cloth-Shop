import React from 'react';
import './styles.scss';

const CollectionItem = ({ img, name, price }) => {

  return (
    <div className="collection-container">
      <div className="collection-item-container">
        <img src={img} alt="..." />
      </div>
      <div className="collection-item-footer">
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
    </div>
  )
}

export default CollectionItem;