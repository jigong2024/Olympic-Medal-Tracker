import React from "react";

const MedalList = ({ countries, onDeleteCountry }) => {
  // 금메달 수를 기준으로 국가를 정렬하는 함수
  const sortGoldMedals = (countries) => {
    return [...countries].sort((a, b) => b[1] - a[1]);
  };

  // 정렬될 국가 리스트
  const sortedCountries = sortGoldMedals(countries);

  return (
    <div>
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
          {sortedCountries.map((country, index) => {
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
