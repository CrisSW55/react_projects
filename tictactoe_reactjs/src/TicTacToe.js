import { useState } from "react";
import './TicTacToe.css';

function TicTacToe(){
        let init_board = [
            {id:0,btn_Text:null,isClicked :false},{id:1,btn_Text:null,isClicked :false},{id:2,btn_Text:null,isClicked :false},

            {id:3,btn_Text:null,isClicked :false},{id:4,btn_Text:null,isClicked :false},{id:5,btn_Text:null,isClicked :false},

            {id:6,btn_Text:null,isClicked :false},{id:7,btn_Text:null,isClicked :false},{id:8,btn_Text:null,isClicked :false},


        ]
        const [winnerStatement,setWinnerStatement] = useState("Who Won: No Winner Yet!");
        const [board,setBoard] = useState(init_board);
        const [symbol,setSymbol] = useState("X");
        
       
    //Apply letter X or O
     const addSymbol  = ()=>{
         if(symbol === "X"){setSymbol(!symbol?"X":"O");return symbol}
        else if(symbol === "O"){setSymbol(!symbol?"O":"X");return symbol}
                        
    }
    function btnPressed(i){
        return isWinner(changeBtnText(i));
        
    }

     function changeBtnText(button_Id){

            const new_Board = board.map((btn,i)=>{
                if(i === button_Id && btn.isClicked === false){
                return {...btn, btn_Text: addSymbol(),isClicked:true}; 
                }else{return btn}
                });
              setBoard(new_Board);
              return board;
}
    function isWinner(new_Board){
        //After 3 counted clicks, either horizontal,vertical, or diagonal,
        //the winner is declared, based on the symbol X or O

        //Horizontal variables:rows
        let xr1 = 0;let xr2 = 0;let xr3 = 0;
        let or1 = 0;let or2 = 0; let or3 = 0;
        //Vertical variables: columns
        let xc1 = 0;let xc2 = 0;let xc3 = 0;
        let oc1 = 0; let oc2 = 0;let oc3 = 0; 
        //Diagonal variables: diagnals
        let xd1 = 0;let xd2 = 0;
        let od1 = 0;let od2 = 0;

        new_Board.map((btn,i) => {
                if(i === 0 && btn.isClicked === true){
                    if(btn.btn_Text === "X"){
                        xr1 = xr1+1; xc1 = xc1+1; xd1 = xd1+1;
                    }
                    else if(btn.btn_Text === "O"){
                        or1 = or1+1; oc1 = oc1+1; od1 = od1+1;
                    }
                }
                else if(i === 1 && btn.isClicked === true){
                     if(btn.btn_Text === "X"){
                        xr1 = xr1+1; xc2 = xc2+1; 
                    }
                    else if(btn.btn_Text === "O"){
                        or1 = or1+1; oc2 = oc2+1;
                    }
                }
                 else if(i === 2 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr1 = xr1+1; xc3 = xc3+1; xd2 = xd2+1;
                    }
                    else if(btn.btn_Text === "O"){
                        or1 = or1+1; oc3 = oc3+1; od2 = od2+1;
                    }
                }
                else if(i === 3 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr2 = xr2+1; xc1 = xc1+1; 
                    }
                    else if(btn.btn_Text === "O"){
                        or2 = or2+1; oc1 = oc1+1;
                    }
                }
                else if(i === 4 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr2 = xr2+1; xc2 = xc2+1; xd1 = xd1+1; xd2 = xd2+1;
                    }
                    else if(btn.btn_Text === "O"){
                        or2 = or2+1; oc2 = oc2+1; od1 = od1+1; od2 = od2+1;
                    }
                }
                else if(i === 5 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr2 = xr2+1; xc3 = xc3+1; 
                    }
                    else if(btn.btn_Text === "O"){
                        or2 = or2+1; oc3 = oc3+1;
                     }
                }
                else if(i === 6 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                       xr3 = xr3+1; xc1 = xc1+1; xd2 = xd2+1;
                    }
                    else if(btn.btn_Text === "O"){
                        or3 = or3+1; oc1 = oc1+1; od2 = od2+1;
                    }
                }
                else if(i === 7 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr3 = xr3+1; xc2 = xc2+1; 
                    }
                    else if(btn.btn_Text === "O"){
                        or3 = or3+1; oc2 = oc2+1;
                    }
                }
                else if(i === 8 && btn.isClicked === true){
                   if(btn.btn_Text === "X"){
                        xr3 = xr3+1; xc3 = xc3+1; xd1 = xd1+1;
                    }
                    else if(btn.btn_Text === "O"){
                        or3 = or3+1; oc3 = oc3+1; od1 = od1+1;
                    }
                }
              });
              //X winner
              if(xr1 === 3 || xr2 === 3 || xr3 === 3||xc1 === 3 || xc2 === 3 || xc3 === 3||xd1 === 3 || xd2 === 3){setWinnerStatement("The winner is: X");return winnerStatement;}
              //O Winner
              else if(or1 === 3 || or2 === 3 || or3 === 3||oc1 === 3 || oc2 === 3 || oc3 === 3||od1 === 3 || od2 === 3){setWinnerStatement("The winner is: O");return winnerStatement;}
             return winnerStatement;
    }
             
        return(
              <>
             
              
              <div className="col">
              <h1 >Tic-Tac-Toe Game!</h1>
              <p ><b>{winnerStatement}</b>{ }</p>
              </div>
             
              <ul className="grid-container">
               {board.map((btn,i)=> (
                <div key={i}>
                 <button 
                        disabled = {btn.isClicked}
                        id = {"btn"+i}
                        onClick={() => {
                        btnPressed(i);
                        }} >
                        {btn.btn_Text}
                    </button>
                </div>
                    ))}
                </ul> 
              
            </>
          );


        
}
export default TicTacToe;