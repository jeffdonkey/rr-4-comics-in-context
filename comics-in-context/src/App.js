// IMPORTS
import React from 'react';
import './App.css';
import UserInterface from "./UserInterface";
import StylesContext from './StylesContext';

//MAIN FUNCTION
function App() {
  const stylin = {
    background: "#0000ff",
    display: "inline-block",
    width: 120,
    height: 55,
    fontSize: 18,
    letterSpacing: 1,
    border: "2px solid #1ECD97",
    borderRadius: 15

  };

  return (
    <main>
      <StylesContext.Provider value={stylin}>
        <h1
          style={{
            color: "#FEE001",
            fontFamily: "Luminari, fantasy",
            fontSize: 50
          }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </StylesContext.Provider>
    </main>
  );
}
// line 9-17, "stylin" is being defined
// lines 23 and 34 are wrapping code so that "StylesContext" is applied
// the the enclosed data.
// line 23 is providing "stylin" to StylesContext.js

export default App