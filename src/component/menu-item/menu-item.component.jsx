import React from "react";

import { withRouter, Link } from "react-router-dom";

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/menu-item/menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> SHOW NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
