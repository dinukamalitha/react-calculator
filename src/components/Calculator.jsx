import React, { useState } from "react";
import * as Math from "mathjs";

function Calculator() {

    const [displayValue, setDisplayValue] = useState("");
    const [answer, setAnswer] = useState(0);

    function insert(e) {
        const value = e.target.textContent;
        setDisplayValue(prevValue => prevValue + value);
    }

    function evaluate() {
        try {
            const res = Math.evaluate(displayValue);
            if (isNaN(res)) {
                throw new Error("Syntax Error");
            }
            setAnswer(res);
        } catch (error) {
            setAnswer(error.message);
        }
    }

    function clear() {
        setAnswer(0);
    }

    function clearAll() {
        setDisplayValue("");
        setAnswer(0);
    }

    return (
        <div>
            <h1>My Calculator</h1>

            <div className="container">
                <div className="display">
                    <div className="prev">{displayValue}</div>
                    <div className="answer" onClick={insert}>{answer}</div>
                </div>
                <div className="keypad">
                    <div className="row">
                        <div className="btn" onClick={insert}>.</div>
                        <div className="btn" onClick={insert}>(</div>
                        <div className="btn" onClick={insert}>)</div>
                        <div className="btn" onClick={clearAll}>CA</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={insert}>7</div>
                        <div className="btn" onClick={insert}>8</div>
                        <div className="btn" onClick={insert}>9</div>
                        <div className="btn" onClick={insert}>*</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={insert}>4</div>
                        <div className="btn" onClick={insert}>5</div>
                        <div className="btn" onClick={insert}>6</div>
                        <div className="btn" onClick={insert}>/</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={insert}>1</div>
                        <div className="btn" onClick={insert}>2</div>
                        <div className="btn" onClick={insert}>3</div>
                        <div className="btn" onClick={clear}>C</div>
                    </div>
                    <div className="row">
                        <div className="btn" onClick={insert}>-</div>
                        <div className="btn" onClick={insert}>0</div>
                        <div className="btn" onClick={insert}>+</div>
                        <div className="btn" onClick={evaluate}>=</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calculator;
