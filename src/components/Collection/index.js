import React from 'react';
import data from '../../mock/collection';
import './styles.scss';

const Collection = () => {
  return (
    <div className="catigories-container">
      <div className="catigories-row">
        {
          data.slice(0, 3)
          .map(({id, title, image}) => (
            <div key={id} className="catigory-item-above">
              <img src={image} alt="..." />
              <div className="item-label">
                <h1 className="item-name">{title}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }  
      </div>
      <div className="catigories-row">
        {
          data.slice(3, 5)
          .map(({id, title, image}) => (
            <div key={id} className="catigory-item">
              <img src={image} alt="..." />
              <div className="item-label">
                <h1 className="item-name">{title}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          )) 
        }
      </div>
    </div>
  );
}

export default Collection;