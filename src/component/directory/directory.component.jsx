import React from "react";

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/directory/directory.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selector";

const Directory = ({sections}) => {
  return (
    <div className="directory-menu">
      {sections.map(({ imageUrl, title, id, size, linkUrl }) => (
        <MenuItem
          imageUrl={imageUrl}
          title={title}
          key={id}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);
