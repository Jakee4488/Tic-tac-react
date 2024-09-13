import React, { useState } from "react";
import "./Tic-Tac-Toe.css";


const TicTacToe = () => {
    const crossIcon = require("../Assets/cross.png");
    const circleIcon = require("../Assets/circle.png");
    let [count, setCount] = useState(0);    // Count to keep track of the number of moves made by the players
    let data = ["", "", "", "", "", "", "", "", ""];    // Array to store the data of the boxes
    let [lock, setLock] = useState(false);    // Lock to prevent the players from clicking on the boxes after the game is over

    const toggle = (e,num) => {  
        if (lock){
            return 0;
        }
        if (count%2 === 0){
            e.target.innerHTML = `<img src='(${crossIcon})' alt='cross'>`;
            data[num] = "X";
            setCount(count++);
        }
        else{
            e.target.innerHTML = `<img src='(${circleIcon})' alt='circle'>`;
            data[num] = "O";
            setCount(count++);
        }
    }
    return (
        <div className="container">
            <h1 className='title'>Tic Tac Toe Game <span>React</span></h1>
            <div className="board">
                <div children='row1'>
                    <div className="boxes" id="box1" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" id="box2"onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" id="box3"onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div children='row2'>
                    <div className="boxes" id="box4"onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" id="box5"onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" id="box6"onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div children='row3'>
                    <div className="boxes" id="box7"onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" id="box8"onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" id="box9"onClick={(e)=>{toggle(e,8)}}></div>    
                </div>
                </div>
                <button className="reset">Reset</button>
                </div>
    );

}

export default TicTacToe;