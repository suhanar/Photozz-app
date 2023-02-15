import React from 'react';
import Heading from './Heading';
import Button from './Button';


function Header({show,setShow}) {
  return (
    <div className='header'>
        <Heading />
        <Button show={show} setShow={setShow}/>
    </div>
  )
}

export default Header