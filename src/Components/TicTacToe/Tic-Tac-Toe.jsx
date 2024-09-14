import React, { useState } from "react";
import "./Tic-Tac-Toe.css";

const TicTacToe = () => {
    const crossIcon = require("../Assets/cross.png");
    const circleIcon = require("../Assets/circle.png");
    const [count, setCount] = useState(0);
    const [data, setData] = useState(Array(9).fill(""));
    const [lock, setLock] = useState(false);

    const toggle = (e, num) => {  
        if (lock || data[num] !== "") {
            return;
        }
        const newData = [...data];
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${crossIcon}' alt='cross'>`;
            newData[num] = "X";
        } else {
            e.target.innerHTML = `<img src='${circleIcon}' alt='circle'>`;
            newData[num] = "O";
        }
        setData(newData);
        setCount(count + 1);
        checkWinner(newData);
    }

    const checkWinner = (currentData) => {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6] // Diagonals
        ];

        for (let combo of winningCombos) {
            const [a, b, c] = combo;
            if (currentData[a] && currentData[a] === currentData[b] && currentData[a] === currentData[c]) {
                setLock(true);
                alert(`Player ${currentData[a]} wins!`);
                return;
            }
        }

        if (currentData.every(cell => cell !== "")) {
            setLock(true);
            alert("It's a draw!");
        }
    }

    const resetGame = () => {
        setCount(0);
        setData(Array(9).fill(""));
        setLock(false);
        document.querySelectorAll('.boxes').forEach(box => box.innerHTML = "");
    }

    return (
        <div className="container">
            <h1 className='title'>Tic Tac Toe Game <span>React</span></h1>
            <div className="board">
                <div className='row1'>
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className='row2'>
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className='row3'>
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>    
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    );
}

export default TicTacToe;