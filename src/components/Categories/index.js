import React from 'react';
import data from '../../mock/categories';
import './styles.scss';

const Categories = () => {
  return (
    <div className="catigories-container">
      <div className="catigories-row">
        {
          data.slice(0, 3)
          .map(({id, name, image}) => (
            <div key={id} className="catigory-item-above">
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          ))
        }  
      </div>
      <div className="catigories-row">
        {
          data.slice(3, 5)
          .map(({id, name, image}) => (
            <div key={id} className="catigory-item">
              <div className="item-label">
                <h1 className="item-name">{name}</h1>
                <h2 className="item-text">Shop Now</h2>
              </div>
            </div>
          )) 
        }
      </div>
    </div>
  );
}

export default Categories;