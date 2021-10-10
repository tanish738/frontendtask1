import React, { useEffect, useState } from 'react';

function App(props){
  const [finalSheet,setFinalSheet]=useState(0)
  useEffect(()=>{
  setFinalSheet(prevFinalSheet=>{
    return{
      ...prevFinalSheet,
      [props.id]:props.val
    }
  })},[])
  console.log(finalSheet)
  return(
    <div>
      <p>{props.val}</p>
      <p>{props.id}</p>
    </div>
  )
}

export default App;
