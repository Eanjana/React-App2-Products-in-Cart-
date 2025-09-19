import React, { useEffect } from 'react'
import './First.css'
import { useState } from 'react'

function First({username,imgurl}) {

  const[state,setState]=useState(100)

  const[message,setMessage]=useState("Offer is On")

  useEffect(function(){     /* Always use function() inside useEffect() to write if conditions*/

    console.log("The side effect is happend");  /* this will show in inspect only ...the if conditions under we done to resolve the side effects happend during the program  (side effects= bugs)*/
    

    if(state>100){
      setState(100)    /* To not exceed from 100 to 101....etc, only till 100 wen we press return button*/ 
    }

    if(state<90 && state>=80){    /* Putting messages for conditions that showing how many products left  */
      setMessage("Hurry Up")
    }
    else if(state<80){
    setMessage("Only few left")
    }
    else{
      setMessage("Offer is on")
    }
  },[state])
  

  function addItem(){       /*This will decrease the count of shoe( when we purchase item ...current state of stock will be reduced) so it will show...Only this much item available*/
    setState(state-1)
  }
  function returnItem(){     /* This increases the item stock left when we return item the stock increase*/
    setState(state+1)
  }

  return (
    <div>

      <div className="Main1">
        <h1 className='one'>only {state} are available</h1>
        <h1 className="text2">{message}</h1>
        <h1>{username}</h1>
        <img src={imgurl} alt="" />
        <button onClick={addItem}>Add</button>
        <button onClick={returnItem}>Return</button>
      </div>

      <br></br>
      
    </div>
  )
}

export default First