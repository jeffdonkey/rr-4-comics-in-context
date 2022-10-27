import React, { useContext } from "react";
import StylesContext from "./StylesContext"

// NOTE: YOU CAN EXPORT AT THE BEGINNING OF A FUNCTION
export default function CollectorButton() {
  const buttonStyling = React.useContext(StylesContext)
  return (
    <div>
      <button style={buttonStyling}>
        Click Here!
      </button>
    </div>
  );
}
// Line 6 is setting "buttonStyling" to the values from StylesContext.js
