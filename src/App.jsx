import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./App.css";

const App = () => {
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
    <div className="all-container">
      <h1>2024 파리 올림픽</h1>
      <main className="input-container">
        <MedalForm
          onAddCountry={addCountry}
          countries={countries}
          setCountries={setCountries}
        />
      </main>
      <section className="list-container">
        <MedalList countries={countries} onDeleteCountry={deleteCountry} />
      </section>
    </div>
  );
};

export default App;
