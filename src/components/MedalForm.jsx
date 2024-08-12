import React, { useState } from "react";

const MedalForm = ({ onAddCountry }) => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState("");
  const [silver, setSilver] = useState("");
  const [bronze, setBronze] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCountry([country, gold, silver, bronze]);

    // 폼 초기화
    setCountry("");
    setGold("");
    setSilver("");
    setBronze("");
  };

  const formContainerStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "60px",
  };

  const fieldGroupStyle = {
    display: "flex",
    flexDirection: "column",
    width: "200px",
    textAlign: "center",
  };

  return (
    <form style={formContainerStyle} onSubmit={handleSubmit}>
      <label style={fieldGroupStyle}>
        국가명
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </label>
      <label style={fieldGroupStyle}>
        금메달
        <input
          type="number"
          value={gold}
          onChange={(e) => setGold(e.target.value)}
        />
      </label>
      <label style={fieldGroupStyle}>
        은메달
        <input
          type="number"
          value={silver}
          onChange={(e) => setSilver(e.target.value)}
        />
      </label>
      <label style={fieldGroupStyle}>
        동메달
        <input
          type="number"
          value={bronze}
          onChange={(e) => setBronze(e.target.value)}
        />
      </label>
      <div>
        <button
          style={{
            marginRight: "20px",
          }}
          type="submit"
        >
          국가 추가
        </button>
        <button type="button">업데이트</button>
      </div>
    </form>
  );
};

export default MedalForm;
