import Form from "./Form";
import "./css/style.css";
import { useState, useEffect } from "react";

const Todo = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [sum, setSum] = useState("");
  const [multi, setMulti] = useState("");
  const [division, setDivision] = useState("");
  const [subtract, setSubtract] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    setResult([
      `Sum: ${sum} `,
      ` Multi: ${multi} `,
      ` Division: ${division} `,
      ` Subtraction: ${subtract} `,
    ]);
  }, [sum, multi, division, subtract]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const parsedNum1 = parseInt(num1);
    const parsedNum2 = parseInt(num2);

    // Addition
    setSum(parsedNum1 + parsedNum2);

    // Multiplication
    setMulti(parsedNum1 * parsedNum2);

    // Division
    setDivision(parsedNum1 / parsedNum2);

    // Subtraction
    setSubtract(parsedNum1 - parsedNum2);
  };

  return (
    <div className="background">
      <div className="Todo">
        <div className="">
          <div className="container">
            <h1>React Activity</h1>
            <Form
              numero_uno={num1}
              numero_dos={num2}
              setNum1={setNum1}
              setNum2={setNum2}
              handleFormSubmit={handleFormSubmit}
            />
            <div className="result">This isresult</div>
            <div> {result}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
