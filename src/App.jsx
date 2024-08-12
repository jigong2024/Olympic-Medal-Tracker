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
