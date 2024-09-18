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
        const [row1Clicked,setRow1Clicked]=useState(0);
       
       
      //  Code below used to check who the winner! //
     function isAllClicked(){
        board.map(btn=>{if(btn.isClicked === true || clicked === 0){setClicked(clicked + 1);}})
        if(clicked > 7){return true}
        return false;
}
     //Apply letter X or O
     const addSymbol  = ()=>{
         if(symbol === "X"){setSymbol(!symbol?"X":"O");return symbol}
        else if(symbol === "O"){setSymbol(!symbol?"O":"X");return symbol}
                        
    }
    function pressed_Button(i){
        isWinner2(changeBtnText(i));
        
    }
     function changeBtnText(button_Id){
                const new_Board = board.map((btn,i)=>{
                    if(i === button_Id && btn.isClicked === false){
                        return {...btn, btn_Text: addSymbol(),isClicked:true}; 
                    }else{return btn}
                });
                setBoard(new_Board);
                return new_Board;
                
                
               
    }
    function isWinner2(new_Board){
        //Horizontal access
        let xr1_Clicked = 0;
        let or1_Clicked = 0;
        //btn.id === 0 || btn.id === 1 || btn.id === 2 && 
        new_Board.map((btn,i) => {
                if(i < 3 && btn.isClicked === true){
                    if(btn.btn_Text === "X"){
                        xr1_Clicked = xr1_Clicked+1;
                        console.log("btn.isClicked === true && btn.btn_Text === 'X': "+btn.btn_Text+" "+btn.isClicked+" id: "+i);
                    }
                    if(btn.btn_Text === "O"){
                        or1_Clicked = or1_Clicked+1;
                        console.log("btn.isClicked === true && btn.btn_Text === 'O': "+btn.btn_Text+" "+btn.isClicked+" id: "+i);
                    }
                    
                    }
                    
                
               });
               if(xr1_Clicked === 3){console.log(setWinnerStatement("The winner is: X"));setRow1Clicked(xr1_Clicked);}
               else if(or1_Clicked === 3){console.log(setWinnerStatement("The winner is: O"));setRow1Clicked(or1_Clicked);}

               
         
    }
    function isWinner(new_Board){
        //Horizontal access
        let r1Clicked = 0;
        new_Board.map((btn,i) => {
                if(i < 3){
                    //if(btn.isClicked === false){return}
                    if(btn.id === 0 && btn.isClicked === true && btn.btn_Text === "X"){
                        r1Clicked = r1Clicked+1;
                        console.log("btn.isClicked === true && btn.btn_Text === 'X': "+btn.btn_Text+" "+btn.isClicked+" id: "+i);
                    }
                    else if(btn.id === 1 && btn.isClicked === true && btn.btn_Text === "X"){
                        r1Clicked = r1Clicked+1;
                        console.log("btn.isClicked === true && btn.btn_Text === 'X': " + btn.btn_Text + " "+  btn.isClicked+  " " + i);
                    }
                    else if(btn.id === 2 && btn.isClicked === true && btn.btn_Text === "X"){
                        r1Clicked = r1Clicked+1;
                        console.log("btn.isClicked === true && btn.btn_Text === 'X': " + btn.btn_Text + " "+  btn.isClicked+  " " + i);
                    }
                    if(r1Clicked === 3){console.log(setWinnerStatement("The winner is: " + btn.btn_Text))}
                    
                    }
                
               });

               setRow1Clicked(r1Clicked);
         
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
                        pressed_Button(i);
                       
                        }}>
                        {btn.btn_Text}
                        
                        
                    </button>
                
                </div>
                    ))}
                
               </ul>
                  
                {"Number of isClicked: true, buttons: id: 0-3 with all same symbols: "}{ }{row1Clicked}
               
         
              

              </>
          );


        
}
export default TicTacToe;