import React, { useState } from 'react'

export default function event() {
const [click,setclickvalue]=useState()

const clickHandler=(e)=>{
    setclickvalue(e.target.value)
}




  return (<>
    <div>event</div>

    <button onClick={clickHandler}></button>
    </>
  )
}
