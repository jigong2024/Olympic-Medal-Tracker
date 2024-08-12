import React from "react";

const MedalList = ({ countries, onDeleteCountry }) => {
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
            <th></th>
            {/* 삭제버튼 열 추가 */}
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
                <td>
                  <button onClick={() => onDeleteCountry(name)}>삭제</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MedalList;
