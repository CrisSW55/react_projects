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
        const [clicked,setClicked] = useState(0);
        const [toprow_count,setTRCount]=useState(0);
       
       
      //  Code below used to check who the winner! //
     function isAllClicked(){
        board.map(btn=>{if(btn.isClicked === true || clicked === 0){setClicked(clicked + 1);}})
        if(clicked > 7){return true}
        return false;
    }
    // function isHorizontalWinner(b){
    //         if(b.id === 0  && b.btn_Text === "X" ){
    //             setTRCount(toprow_count + 1);
    //         }
    //         else if(b.id === 1  &&  b.btn_Text === "X"){
    //             setTRCount(toprow_count + 1);
    //         }
    //         else if(b.id === 2  &&  b.btn_Text === "X"){
    //             setTRCount(toprow_count + 1);
    //         }
    // }
    function winner(){
        //Horizontal access
        board.map(btn => {
                if(btn.id < 3 && btn.isClicked === false){
                    //isHorizontalWinner(btn);
                    setTRCount(toprow_count + 1);
                    if(toprow_count === 3){
                        return setWinnerStatement("Winner is player using " + btn.btn_Text)}
                }
        }); 
    }
            
        
        
           
        // if(symbol === "X"){
        //     //horizontal access 
        //     if((board[0].btn_Text === symbol)&&(board[1].btn_Text === symbol)&&(board[2].btn_Text === symbol)||
        //         (board[3].btn_Text === symbol)&&(board[4].btn_Text === symbol)&&(board[5].btn_Text === symbol)||
        //         (board[6].btn_Text === symbol)&&(board[7].btn_Text === symbol)&&(board[8].btn_Text === symbol)){
                
        //     }
        //     else{setWinnerStatement("Who Won: No Winner Yet!"); return false} 
        // }
        // else if(symbol === "O"){
        //     //horizontal access 
        //     if((board[0].btn_Text === symbol)&&(board[1].btn_Text === symbol)&&(board[2].btn_Text === symbol)||
        //         (board[3].btn_Text === symbol)&&(board[4].btn_Text === symbol)&&(board[5].btn_Text === symbol)||
        //         (board[6].btn_Text === symbol)&&(board[7].btn_Text === symbol)&&(board[8].btn_Text === symbol)){
        //         setWinnerStatement("Winner is player using " + symbol);
        //         return true;
        //     }
        //     else{setWinnerStatement("Who Won: No Winner Yet!"); return false}
        
       
        
        
      
        
        // //vertical access
        // else if(board[0][0] === board[1][0] === board[2][0] ||
        //     board[0][1] === board[1][1] === board[2][1] ||
        //     board[0][2] === board[1][2] === board[2][2]
        // ){  winnerStatement = "Winner is player using " + board[0][0];
        //     return winnerStatement;
        // }

        // //diagnal access
        // else if(board[0][0] === board[1][1] === board[2][2] ||
        //     board[0][2] === board[1][1] === board[2][0]
        // ){
        //     winnerStatement = "Winner is player using " + board[1][1];
        //     return winnerStatement;
        // }
           //console.log("Ran display_Winner fxn: " + winnerStatement);
           //return winnerStatement; 
        //}
     //Apply letter X or O
     function addSymbol(){
        if(symbol === "X"){setSymbol(!symbol?"X":"O");return symbol}
        else if(symbol === "O"){setSymbol(!symbol?"O":"X");return symbol}
    }
     function changeBtnText(button_Id){
                const new_Board = board.map((btn,i)=>{
                    if(i === button_Id && btn.isClicked === false){
                        return {...btn, btn_Text: addSymbol(),isClicked:true}; 
                    }else{return btn}
                });
                setBoard(new_Board);
               
    }
        
        return(

              <>
              <h1 className="c">
                Tic-Tac-Toe Game!
              </h1>
              <p className="c">
                <b>{winnerStatement}</b>{ }
                {clicked}
              </p>
              <ul className="btnRow">
               {board.map((btn,i)=> (
                <div key={i}>
                    <button 
                        disabled = {btn.isClicked}
                        id = {"btn"+i}
                        onClick={() => {
                        changeBtnText(i);
                        winner(i);
                        }}>
                        {btn.btn_Text}
                        
                    </button>
                
                </div>
                    ))}
                
               </ul>
                  
                {toprow_count}
               
         
              

              </>
          );


        
}
export default TicTacToe;