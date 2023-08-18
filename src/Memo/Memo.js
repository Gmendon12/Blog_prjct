import React from 'react'
import { useState } from 'react'

export default function Memo() {
  
    const[count1,setcount1] = useState(0)
    const[count2,setcount2] = useState(0)
    
    let ifEven = () =>{
        for(let i=0;i<80000000;i++){}
        if(count1 % 2 == 0 ){
            return "Even"
        }
    }
  
    return (
    <div>
        <div>
            <p>{`Count one is ${count1}`}</p>
            <button onClick={()=>{
                setcount1(count1 + 1)
            }}>Count1 +</button>
            <p>{ifEven() ? "Even" : "Odd"}</p>
        </div>
    </div>
  )
}
