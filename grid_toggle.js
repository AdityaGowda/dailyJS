import { useEffect, useState,useRef } from "react";

export default function GridToggle() {
const  [getIndex,setGetIndex]=useState(new Set([]))
const intervalref=useRef(null)

const blocks=[1,1,1,1,0,1,1,1,1]

function handleToggle(index){ 
    setGetIndex((prev)=>{
      return new Set([...prev,index]);
    }) 
    if(getIndex.size+1==(blocks.length-1)){
      handleReverseToggle();
      return;
  } 
}
 
function handleReverseToggle(){
  clearInterval(intervalref.current)
  intervalref.current=setInterval(()=>{
    setGetIndex((prev)=>{
        const temp =[...prev];
        temp.pop()
        if(temp.length==0){clearInterval(intervalref.current)
      return new Set([])}
        return new Set([...temp]);
    })
 },300);
}

useEffect(()=>{
  return (()=>clearInterval(intervalref.current))
},[])
 
  return (<div>

    <p className="p-20 text-left">3×3 grid of interactive cells where each cell lights up when clicked. As the user activates the cells, their activation order is tracked. Once all cells are active, the grid automatically begins deactivating them in the exact reverse order of their activation</p>
    <div className="center-div  maxHunset flex-col p-20">
    <p className="mb-20   mt-0  font-xl ">Grid Toggle</p>
    <div className="grid-toggle-container">
      {blocks.map((value, index) => (
            value ?<div key={index} className={`grid-block ${getIndex.has(index) ? 'active' : ''}`} onClick={()=>handleToggle(index)}></div>:<span key={index}></span>
          ))}
    </div>
    </div>
    </div>
  );
}

