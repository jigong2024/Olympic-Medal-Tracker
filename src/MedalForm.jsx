import React, { useState } from "react";
import "./App.css";

const MedalForm = ({ onAddCountry, countries, setCountries }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  // 국가 추가 버튼 클릭시 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCountry([country, gold, silver, bronze]);

    resetForm();
  };

  // 폼 초기화
  const resetForm = () => {
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  // 업데이트 버튼 클릭시 실행
  const handleUpdate = () => {
    const updatedCountries = countries.map((c) => {
      return c[0] === country ? [country, gold, silver, bronze] : c;
    });

    setCountries(updatedCountries);
    resetForm();
  };

  return (
    <form className="medal-form" onSubmit={handleSubmit}>
      <label className="form-group">
        국가명
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label className="form-group">
        금메달
        <input
          type="number"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
        />
      </label>
      <label className="form-group">
        은메달
        <input
          type="number"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
        />
      </label>
      <label className="form-group">
        동메달
        <input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
        />
      </label>
      <div className="button-group">
        <button
          style={{
            marginRight: "20px",
          }}
          type="submit"
          className="btn btn-add"
        >
          국가 추가
        </button>
        <button type="button" className="btn btn-update" onClick={handleUpdate}>
          업데이트
        </button>
      </div>
    </form>
  );
};

export default MedalForm;
