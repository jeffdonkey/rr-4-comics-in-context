import React, { useContext } from "react";
import StylesContext from "./StylesContext";


export default function RequestFormButton() {
const buttonStyling = React.useContext(StylesContext)
  return (
    <div>
      <button>
        Click Here!
      </button>
      <input type="submit" value="Submit" />

    </div>
  );
}
