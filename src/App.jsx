import React, { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
// import "./App.css";

const App = () => {
  const allStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "1200px", // 최대넓이 1200px
    minWidth: "800px", // 최소넓이 800px
    margin: "0 auto",
    padding: "0 20px",

    backgroundColor: "#e0e8f0",
    borderRadius: "15px",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  };

  const [countries, setCountries] = useState([]);

  // 국가 메달 수 리스트 추가하는 함수
  const addCountry = (newCountry) => {
    setCountries([...countries, newCountry]);
  };

  // 국가 삭제 함수
  const deleteCountry = (countryName) => {
    const updatedCountries = countries.filter(
      (country) => country[0] !== countryName
    );
    setCountries(updatedCountries);
  };

  return (
    <div style={allStyle}>
      <h1>2024 파리 올림픽</h1>
      <main
        style={{
          marginTop: "20px",
        }}
      >
        <MedalForm
          onAddCountry={addCountry}
          countries={countries}
          setCountries={setCountries}
        />
      </main>
      <section
        style={{
          marginTop: "60px",
        }}
      >
        <MedalList countries={countries} onDeleteCountry={deleteCountry} />
      </section>
    </div>
  );
};

export default App;
