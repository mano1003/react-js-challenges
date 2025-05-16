import { useState } from "react";

export default function RandomNumbersBox() {
  // State to hold the values of the six squares
  const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6]);

  // Function to generate unique random numbers between 1 and 6 and shuffle them
  const generateRandom = () => {
    const numbers = [1, 2, 3, 4, 5, 6];

    // Shuffle logic
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    setSquares(numbers);
  };

  return (
    <div className="App">
      <h2>Generate Unique Random Numbers (1 to 6)</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[0]}
              </div>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[1]}
              </div>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[2]}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[3]}
              </div>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[4]}
              </div>
              <div
                style={{
                  margin: "5px",
                  border: "1px solid black",
                  width: "50px",
                  height: "50px",
                  textAlign: "center",
                }}
              >
                {squares[5]}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <button id="btnRandomNumberGen" onClick={generateRandom}>
        Generate Random Numbers
      </button>
    </div>
  );
}
