import React, { useState } from 'react'
import attack from '../assets/attack.png'
import defend from '../assets/defend.png'

export default function Home() {

   const  handleAttack=(e)=> {
    setLastStatus("Attack");
    const a=Math.round(Math.random()*10);
    if(currentScore+a>10){
        setGameStatus("You Won!!");
    }
        SetcurrentScore(currentScore=>currentScore+a);
        
    }
   const defendAttack=()=> {
    setLastStatus("Defend")
    const a=Math.round(Math.random()*10);
    if(currentScore-a<-10){
        setGameStatus("You Lost!!");
    }
        SetcurrentScore(currentScore=>currentScore-a);
       
    }
    const resetAttack=()=>{
        SetcurrentScore(1)
        setGameStatus("");
        setLastStatus("");
    }
    const randomAttack=()=>{
        const a=Math.round(Math.random());
        if(a===0){
            defendAttack();
        }
        else{
            handleAttack();
        }
    }
    const[currentScore,SetcurrentScore]=useState(1);
    const[gameStatus,setGameStatus]=useState('');
    const[lastStatus,setLastStatus]=useState('');
  return (
    <div style={{width:"100%",overflow:"hidden"}}>
     
    <div className="row text-white text-center">
    <hr></hr>
          <h1>Game Score:{currentScore}</h1>
          <h3>You will win at +10 points and lose -10 points</h3>
          <h2> Last Play:{lastStatus}</h2>
          <h3> Game Status:{gameStatus}</h3>
          
       <div className='col-6 col-md-3 offset-md-3' > 
         <img
           style={{
            width:"100%",
            cursor:"pointer",
            border:"1px solid green", 
           }}
           className='p-4 rounded'
           src={attack}
           alt=''
           onClick={handleAttack}
         />
       </div>
       <div className='col-6 col-md-3 ' > 
         <img
           style={{
            width:"100%",
            cursor:"pointer",
            border:"1px solid red", 
           }}
           className='p-4 rounded'
           src={defend}
           alt=''
           onClick={defendAttack}
         />
       </div>
       <div className='col-12 col-md-4 offset-md-4'>
             <button onClick={randomAttack} className='btn btn-secondary w-100 mt-2'>Random Play</button>
             <br />
             <button onClick={resetAttack}  className='btn btn-warning w-100 mt-2'>Reset</button>
       </div>
      
      
   
  </div>
  
    </div>
  )
}
