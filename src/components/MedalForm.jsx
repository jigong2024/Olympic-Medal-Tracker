import React, { useEffect, useState } from "react";
import Input from "./input";
import "../App.css";

const MedalForm = ({ onAddCountry, countries, setCountries }) => {
  const [medal, setMedal] = useState([
    { name: "국가명", value: "", type: "text" },
    { name: "금메달", value: "", type: "number" },
    { name: "은메달", value: "", type: "number" },
    { name: "동메달", value: "", type: "number" },
  ]);

  // 국가 추가 버튼 클릭시 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    const add = medal.map((ele) => ele.value);
    onAddCountry(add);

    resetForm();
  };

  // 폼 초기화
  const resetForm = () => {
    setMedal(
      medal.map((item) => {
        return { ...item, value: "" };
      })
    );
  };

  // 업데이트 버튼 클릭시 실행
  const handleUpdate = () => {
    const [country, gold, silver, bronze] = medal.map((item) => item.value);
    const updatedCountries = countries.map((c) => {
      return c[0] === country ? [country, gold, silver, bronze] : c;
    });

    setCountries(updatedCountries);
    resetForm();
  };
  // useEffect(() => {
  //   console.log(typeof gold);
  // }, [gold]);
  return (
    <form className="medal-form" onSubmit={handleSubmit}>
      {medal?.map((ele, idx) => {
        return <Input data={ele} key={idx} setMedal={setMedal} />;
      })}

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
