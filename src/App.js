import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");
  const [result, setResult] = useState("");

  function inputChangeHandler(event) {
    let newInputValue = event.target.value;
    setInputValue(newInputValue);
  }

  function dobChangeHandler(event) {
    let newDateValue = event.target.value;
    setDateValue(newDateValue);
  }

  function checkBtnClickHandler() {
    if (dateValue) {
      let birthDay = dateValue;
      var split = birthDay.split("/");

      var year = split[0];
      var month = split[1];
      var day = split[2];

      if (
        isNaN(parseInt(year)) ||
        isNaN(parseInt(month)) ||
        isNaN(parseInt(day)) ||
        year < 1900 ||
        year > 3000 ||
        month < 0 ||
        month > 12 ||
        day < 0 ||
        day > 31
      ) {
        alert("Please enter a valid date");
      } else {
        if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
          let resultText =
            "Congratulations!! You were born in a leap year. Thank you for playing!!";
          setResult(resultText);
        } else {
          let resultText =
            "Seems like you were not born in a leap year. Thank you for playing!!";
          setResult(resultText);
        }
      }
    } else {
      alert("Please enter your DOB");
    }
  }

  return (
    <div className="App">
      <h1>Let's check whether you were born in a leap year.</h1>
      <input
        onChange={inputChangeHandler}
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
        type="text"
        placeholder="Enter your name"
      />
      <h3>Welcome {inputValue}</h3>

      <h2>Please enter your DOB</h2>
      <input
        onChange={dobChangeHandler}
        style={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
        type="text"
        placeholder="Enter DOB in YYYY/MM/DD"
      />
      <button
        onClick={checkBtnClickHandler}
        style={{
          display: "block",
          margin: "2rem auto",
          padding: "0.5rem",
          borderRadius: "0.5rem",
          border: "1px solid black"
        }}
      >
        Check
      </button>
      <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{result}</div>
    </div>
  );
}
