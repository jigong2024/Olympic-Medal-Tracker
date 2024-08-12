import React, { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";

const App = () => {
  const allStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const [countries, setCountries] = useState([]);

  const addCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  return (
    <div style={allStyle}>
      <h1>2024 파리 올림픽</h1>
      <main
        style={{
          marginTop: "20px",
        }}
      >
        <MedalForm onAddCountry={addCountry} />
      </main>
      <section
        style={{
          marginTop: "60px",
        }}
      >
        <MedalList countries={countries} />
      </section>
    </div>
  );
};

export default App;
