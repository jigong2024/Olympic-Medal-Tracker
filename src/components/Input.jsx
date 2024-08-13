import { useEffect } from "react";

const Input = ({ data, setMedal }) => {
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setMedal((previousMedalState) => {
      return previousMedalState.map((medalField) => {
        if (medalField.name === name) {
          return { ...medalField, value: value };
        }
        return medalField;
      });
    });
  };

  return (
    <label className="form-group">
      {data.name}
      <input
        type={data.type}
        name={data.name}
        value={data.value}
        onChange={handleOnchange}
      />
    </label>
  );
};

export default Input;
