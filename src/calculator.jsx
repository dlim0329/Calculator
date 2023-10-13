import React, { useState } from "react";

function App() {
	const [expression, setExpression] = useState("");
	const [output, setOutput] = useState("");

	const handleButtonClick = value => setExpression(expression + value);

	const handleKeyboardInput = (event) => {
		const allowedKeys = /[0-9+\-*/.=]|Enter|Backspace|Escape/,
			key = event.key;

		if (allowedKeys.test(key)) {
			if (key === "Enter") calculate();
			else if (key === "Backspace") deleteInput();
			else if (key === "=" || key === "Enter") calculate();
			else setExpression(expression + key);
		}
	};

	const deleteInput = () =>
		!expression.length ? setOutput("")
			: expression.length === 1
				? setExpression("")
				: setExpression(expression.slice(0, -1));

	const clearAll = () => {
		setExpression("");
		setOutput("");
	}

	const calculate = () => {
		try {
			const result = eval(expression);
			setOutput(`${expression} = ${result}`);
			setExpression(result);
		} catch (error) {
			setOutput("Error");
			setExpression("");
		}
	};

	return (
		<div className="calculator" tabIndex="0" onKeyDown={ handleKeyboardInput }>
			<div className="output" >
				<div className="previous-output">{ output } </div>
				<div className="current-output">{ expression }</div>
			</div>
			<button className="span-two" onClick={ clearAll }>AC</button>
			<button onClick={ deleteInput }>DEL</button>
			<button onClick={ () => handleButtonClick("/") }>/</button>
			<button onClick={ () => handleButtonClick("1") }>1</button>
			<button onClick={ () => handleButtonClick("2") }>2</button>
			<button onClick={ () => handleButtonClick("3") }>3</button>
			<button onClick={ () => handleButtonClick("+") }>+</button>
			<button onClick={ () => handleButtonClick("4") }>4</button>
			<button onClick={ () => handleButtonClick("5") }>5</button>
			<button onClick={ () => handleButtonClick("6") }>6</button>
			<button onClick={ () => handleButtonClick("-") }>-</button>
			<button onClick={ () => handleButtonClick("7") }>7</button>
			<button onClick={ () => handleButtonClick("8") }>8</button>
			<button onClick={ () => handleButtonClick("9") }>9</button>
			<button onClick={ () => handleButtonClick("*") }>*</button>
			<button onClick={ () => handleButtonClick(".") }>.</button>
			<button onClick={ () => handleButtonClick("0") }>0</button>
			<button className="span-two" onClick={ calculate }>=</button>
		</div>
	);
}

export default App;