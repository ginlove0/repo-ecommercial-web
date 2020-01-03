import React from "react";

import "/Users/gin/Desktop/Ipsupply/crwn-clothing/src/component/form-input/form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {

    console.log(otherProps.value.length)
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      

      {label ? (
          
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
