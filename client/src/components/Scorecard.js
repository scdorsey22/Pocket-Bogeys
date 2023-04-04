import React, { useState } from "react";

const courses = [
  {
    name: "Encinitas Ranch",
    tees: [
      {
        color: "Blue",
        holes: [
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
        ],
      },
      {
        color: "White",
        holes: [
          { number: 1, yardage: 297, index: 15, par: 4 },
          { number: 2, yardage: 168, index: 7, par: 3 },
          { number: 3, yardage: 522, index: 11, par: 5 },
          { number: 4, yardage: 285, index: 5, par: 4 },
          { number: 5, yardage: 300, index: 9, par: 4 },
          { number: 6, yardage: 139, index: 17, par: 3 },
          { number: 7, yardage: 336, index: 3, par: 4 },
          { number: 8, yardage: 330, index: 1, par: 4 },
          { number: 9, yardage: 470, index: 13, par: 5 },
          { number: 10, yardage: 407, index: 4, par: 4 },
          { number: 11, yardage: 487, index: 10, par: 5 },
          { number: 12, yardage: 130, index: 18, par: 3 },
          { number: 13, yardage: 370, index: 2, par: 4 },
          { number: 14, yardage: 375, index: 8, par: 4 },
          { number: 15, yardage: 320, index: 16, par: 4 },
          { number: 16, yardage: 324, index: 12, par: 4 },
          { number: 17, yardage: 160, index: 6, par: 3 },
          { number: 18, yardage: 470, index: 14, par: 5 },
        ],
      },
    ],
  },
];

const Scorecard = () => {
  const [courseIndex, setCourseIndex] = useState(0);
  const [teeColorIndex, setTeeColorIndex] = useState(0);

  const currentCourse = courses[courseIndex];
  const currentTeeColor = currentCourse.tees[teeColorIndex];

  const holes = currentTeeColor.holes;

  const handleTeeColorChange = (e) => {
    setTeeColorIndex(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourseIndex(e.target.value);
    setTeeColorIndex(0);
  };

  const [scores, setScores] = useState(Array(holes.length).fill(""));
  const [putts, setPutts] = useState(Array(holes.length).fill(""));
  const [fairways, setFairways] = useState(Array(holes.length).fill(false));

  const handleReset = () => {
      setScores(Array(holes.length).fill(""))
      setPutts(Array(holes.length).fill(""))
      setFairways(Array(holes.length).fill(false))
  }


  const handleScoreChange = (e, index) => {
    const newScores = [...scores];
    newScores[index] = e.target.value;
    setScores(newScores);
  };

  const handlePuttsChange = (e, index) => {
    const newPutts = [...putts];
    newPutts[index] = e.target.value;
    setPutts(newPutts);
  };

  const handleFairwayChange = (e, index) => {
    const newFairways = [...fairways];
    newFairways[index] = e.target.checked;
    setFairways(newFairways);
  };


  console.log(holes[0])
  console.log(scores)
  console.log(putts)
  console.log(fairways)

  const totalYardage = holes.reduce((sum, hole) => sum + hole.yardage, 0);
  const totalPar = holes.reduce((sum, hole) => sum + hole.par, 0);
  const totalScore = scores.reduce((sum, score) => sum + Number(score), 0);
  const totalPutts = putts.reduce((sum, putts) => sum + Number(putts), 0);
  const fairwayPercentage = Math.round((fairways.filter(Boolean).length / fairways.length) * 100);

  return (
    <>
      <div className="course-header">
        <h1>{currentCourse.name}</h1>
        <div className="tee-selector">
          <label htmlFor="tee-color">Tee color:</label>
          <select
            id="tee-color"
            value={teeColorIndex}
            onChange={handleTeeColorChange}
          >
            {currentCourse.tees.map((tee, index) => (
              <option key={index} value={index}>
                {tee.color}
              </option>
            ))}
          </select>
        </div>
      </div>

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
                <input
                  type="text"
                  pattern="\d*"
                  inputMode="numeric"
                  value={scores[index]}
                  onChange={(e) => handleScoreChange(e, index)}
                />
              </td>
            ))}
            <td>{totalScore}</td>
          </tr>
          <tr>
            <th>Putts</th>
            {holes.map((hole, index) => (
              <td key={index}>
                <input
                  type="text"
                  pattern="\d*"
                  inputMode="numeric"
                  value={putts[index]}
                  onChange={(e) => handlePuttsChange(e, index)}
                />
              </td>
            ))}
            <td>{totalPutts}</td>
          </tr>
          <tr>
            <th>Fairways Hit</th>
            {holes.map((hole, index) => (
              <td key={index}>
                <input
                  type="checkbox"
                  checked={fairways[index]}
                  onChange={(e) => handleFairwayChange(e, index)}
                />
              </td>
            ))}
            <td>{fairwayPercentage}%</td>
          </tr>
        </tbody>
      </table>
      <button className="reset-button" onClick={handleReset}>Reset</button>
    </>
  );
};

export default Scorecard;
