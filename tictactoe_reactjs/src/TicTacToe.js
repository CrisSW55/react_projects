import { useState } from "react";
import './TicTacToe.css';

function TicTacToe(){
        let init_board = [
            {id:0,btn_Text:"0"},{id:1,btn_Text:"1"},{id:2,btn_Text:"2"},

            {id:3,btn_Text:"3"},{id:4,btn_Text:"4"},{id:5,btn_Text:"5"},

            {id:6,btn_Text:"6"},{id:7,btn_Text:"7"},{id:8,btn_Text:"8"},


        ]
        const [winnerStatement,setWinnerStatement] = useState("Who Won: No Winner Yet!");
        const [board,setBoard] = useState(init_board);
        //Apply letter X or O
        function change_BtnText(id){
                // if(board[id] === id){
                //     setBoard(result
                //         result = board[id].btn_Text = "O"
                //     )
                // }
        }
        //  Code below used to check who the winner! //
    //  function display_Winner(){
    //          //horizontal access
    //     if(board[0][0] === board[0][1] === board[0][2] ||
    //         board[1][0] === board[1][1] === board[1][2] ||
    //         board[2][0] === board[2][1] === board[2][2]
    //     ){
    //         // setWinnerStatement("Winner is player using " + board[0][0]); 
    //         // console.log(winnerStatement);
    //         return winnerStatement;
    //     }
    //     //vertical access
    //     else if(board[0][0] === board[1][0] === board[2][0] ||
    //         board[0][1] === board[1][1] === board[2][1] ||
    //         board[0][2] === board[1][2] === board[2][2]
    //     ){  winnerStatement = "Winner is player using " + board[0][0];
    //         return winnerStatement;
    //     }

    //     //diagnal access
    //     else if(board[0][0] === board[1][1] === board[2][2] ||
    //         board[0][2] === board[1][1] === board[2][0]
    //     ){
    //         winnerStatement = "Winner is player using " + board[1][1];
    //         return winnerStatement;
    //     }
    //        //console.log("Ran display_Winner fxn: " + winnerStatement);
    //        return winnerStatement; 
    //     }
        return(

              <>
              <h1 className="c">
                Tic-Tac-Toe Game!
              </h1>
              <p className="c">
                <b>{winnerStatement}</b>
              </p>
              <ul className="btnRow">
               {board.map(btn => (
                <div key={btn.id}>
                    <button 
                        id = {"btn"+btn.id}
                        onClick={() => {
                        change_BtnText(btn.id);
                        }}>
                        {btn.btn_Text}
                    </button>
                
                </div>
                    ))}
                
               </ul>
         
              

              </>
          );


        
}
export default TicTacToe;