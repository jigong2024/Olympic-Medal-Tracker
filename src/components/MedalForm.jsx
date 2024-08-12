import React from "react";

const MedalForm = () => {
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
    <form style={formContainerStyle}>
      <label style={fieldGroupStyle}>
        국가명
        <input type="text" name="countryName" />
      </label>
      <label style={fieldGroupStyle}>
        금메달
        <input type="number" name="goldMedals" min="0" />
      </label>
      <label style={fieldGroupStyle}>
        은메달
        <input type="number" name="goldMedals" min="0" />
      </label>
      <label style={fieldGroupStyle}>
        동메달
        <input type="number" name="goldMedals" min="0" />
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
