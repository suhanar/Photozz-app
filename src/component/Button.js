import React from 'react'

function Button({show,setShow}) {
  const handleClick = ()=>{
    setShow(!show);
  }
  return (
    <div className='btn'>
        <button type="text" className='btn1' onClick={handleClick}>Share Photo</button>
    </div>
  )
}

export default Button