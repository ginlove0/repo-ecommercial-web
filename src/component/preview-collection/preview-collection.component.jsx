import React from "react";

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/preview-collection/preview-collection.styles.scss";
import CollectionItems from '../collection-items/collection-item.component'

const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItems key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
