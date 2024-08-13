import React, { useState } from "react";
import Input from "./input";
import "../App.css";

const MedalForm = ({ onAddCountry, countries, setCountries }) => {
  const [medal, setMedal] = useState([
    { name: "국가명", value: "", type: "text" },
    { name: "금메달", value: "", type: "number" },
    { name: "은메달", value: "", type: "number" },
    { name: "동메달", value: "", type: "number" },
  ]);

  // 유효성 검사(국가추가시)
  const addValidateForm = () => {
    if (medal.some((ele) => ele.value === "")) {
      alert("모든 빈칸을 채워주세요!");
      return false;
    }

    if (countries.some((country) => country[0] === medal[0].value)) {
      alert(
        "이미 존재하는 국가입니다. 업데이트 하려면 업데이트 버튼을 누르세요."
      );
      return false;
    }

    if (medal.slice(1).some((ele) => parseInt(ele.value) < 0)) {
      alert("메달 수는 0 이상이어야 합니다.");
      return false;
    }
    return true;
  };

  // 유효성 검사(업데이트시)
  const updateValidateForm = () => {
    if (medal.some((ele) => ele.value === "")) {
      alert("모든 빈칸을 채워주세요!");
      return false;
    }

    if (medal.slice(1).some((ele) => parseInt(ele.value) < 0)) {
      alert("메달 수는 0 이상이어야 합니다.");
      return false;
    }

    if (!countries.some((country) => country[0] === medal[0].value)) {
      alert(
        "입력하신 국가가 존재하지 않습니다. 국가를 추가하려면 국가 추가 버튼을 누르세요."
      );
      return false;
    }

    return true;
  };

  // 국가 추가 버튼 클릭시 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addValidateForm()) {
      const newCountryData = medal.map((ele) => ele.value);
      onAddCountry(newCountryData);

      resetForm();
    }
  };

  // 업데이트 버튼 클릭시 실행
  const handleUpdate = () => {
    if (updateValidateForm()) {
      const [country, gold, silver, bronze] = medal.map((item) => item.value);
      const updatedCountries = countries.map((c) => {
        return c[0] === country ? [country, gold, silver, bronze] : c;
      });

      setCountries(updatedCountries);
      resetForm();
    }
  };

  // 폼 초기화
  const resetForm = () => {
    setMedal(
      medal.map((ele) => {
        return { ...ele, value: "" };
      })
    );
  };
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
