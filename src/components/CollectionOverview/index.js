import React from 'react';
import './styles.scss';
import collection from '../../mock/collection'
import CollectionPreview from '../CollectionPreview'

const CollectionOverview = () => {
  return (
    <div className="collection-overview">
      {
        collection.map(({id, ...otherProps}) => (
          <CollectionPreview key={id} {...otherProps} />
        ))
      }
    </div>
  )
}

export default CollectionOverview;