import React from "react";

const MedalList = ({ countries }) => {
  return (
    <div>
      <h2>국가별 메달 현황</h2>
      <table>
        <thead>
          <tr>
            <th>국가</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country, index) => {
            const [name, gold, silver, bronze] = country;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{gold}</td>
                <td>{silver}</td>
                <td>{bronze}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
