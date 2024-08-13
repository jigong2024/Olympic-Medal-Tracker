import { useEffect } from "react";

const Input = ({ data, setMedal }) => {
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setMedal((prev) => {
      return prev.map((item) => {
        if (item.name === name) {
          return { ...item, value: value };
        }
        return item;
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
