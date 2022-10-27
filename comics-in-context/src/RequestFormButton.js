import React, { useContext } from "react";
import StylesContext from "./StylesContext";

// NOTE: YOU CAN EXPORT AT THE BEGINNING OF A FUNCTION
export default function RequestFormButton() {
const buttonStyling = React.useContext(StylesContext)

  return (
    <div>
      <input style={buttonStyling} type="submit" value="Submit" />
    </div>
  );
}
// line 6 is setting "buttonStyling" the to values in StylesContext.js