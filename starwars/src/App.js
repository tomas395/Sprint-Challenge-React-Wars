import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters";
import styled from "styled-components";

const SwContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
`;
const App = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")

      .then(res => {
        setChars(res.data.results);
      })
      .catch(err => console.log("Error: The data was not returned!", err));
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <SwContainer>
        {chars.map(chars => (
          <Characters props={chars} />
        ))}
      </SwContainer>
    </div>
  );
};

export default App;
