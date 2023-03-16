import React, { useState } from 'react';


const holes = [
  { number: 1, yardage: 347, index: 15, par: 4 },
  { number: 2, yardage: 192, index: 7, par: 3 },
  { number: 3, yardage: 527, index: 11, par: 5 },
  { number: 4, yardage: 342, index: 5, par: 4 },
  { number: 5, yardage: 354, index: 9, par: 4 },
  { number: 6, yardage: 160, index: 17, par: 3 },
  { number: 7, yardage: 365, index: 3, par: 4 },
  { number: 8, yardage: 407, index: 1, par: 4 },
  { number: 9, yardage: 497, index: 13, par: 5 },
  { number: 10, yardage: 442, index: 4, par: 4 },
  { number: 11, yardage: 540, index: 10, par: 5 },
  { number: 12, yardage: 169, index: 18, par: 3 },
  { number: 13, yardage: 398, index: 2, par: 4 },
  { number: 14, yardage: 433, index: 8, par: 4 },
  { number: 15, yardage: 373, index: 16, par: 4 },
  { number: 16, yardage: 361, index: 12, par: 4 },
  { number: 17, yardage: 185, index: 6, par: 3 },
  { number: 18, yardage: 495, index: 14, par: 5 },
  // Add more holes here
];

const Scorecard = () => {
  const [scores, setScores] = useState(Array(holes.length).fill(''));

  const handleScoreChange = (e, index) => {
    const newScores = [...scores];
    newScores[index] = e.target.value;
    setScores(newScores);
  };

  const totalYardage = holes.reduce((sum, hole) => sum + hole.yardage, 0);
  const totalScore = scores.reduce((sum, score) => sum + Number(score), 0);
  const totalPar = holes.reduce((sum, hole) => sum + hole.par, 0)


  return (
    <table className="scorecard">
      <thead>
        <tr>
          <th>Hole</th>
          {holes.map((hole, index) => (
            <th key={index}>{hole.number}</th>
          ))}
          <th>TOT</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Yardage</th>
          {holes.map((hole, index) => (
            <td key={index}>{hole.yardage}</td>
          ))}
          <td>{totalYardage}</td>
        </tr>
        <tr>
          <th>Index</th>
          {holes.map((hole, index) => (
            <td key={index}>{hole.index}</td>
          ))}
          <td></td>
        </tr>
        <tr>
          <th>Par</th>
          {holes.map((hole, index) => (
            <td key={index}>{hole.par}</td>
          ))}
          <td>{totalPar}</td>
        </tr>
        <tr>
          <th>Score</th>
          {holes.map((hole, index) => (
            <td key={index}>
              <input type="text" pattern='\d*' inputMode='numeric' value={scores[index]} onChange={(e) => handleScoreChange(e, index)} />
            </td>
          ))}
          <td>{totalScore}</td>
        </tr>

       
      </tbody>
    </table>
  );
};

export default Scorecard;
