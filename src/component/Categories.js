import React from 'react'

function Categories({search,setSearch}) {
  const list = ['Food','Plants','Mountain','Flower','Ocean','Forest','Animals','Fish','Electronics','House','Snow','Cloud'];
  return (
    <div className='categories'>
        <h5>Categories</h5>

        <div className='list'>
            <ul>
           



    {
      list.filter((val)=>{
        if(search == ''){
          return val;
        }
        else if(val.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }).map((el,key)=> (
        // <li>{el}</li>
        <div className='show-flex'>
           <button className='show-btn' value={el} onClick={(e)=>setSearch(e.target.value.toLowerCase())}>{el}</button>
        </div>
        
        

      ))
    }
              
            </ul>
        </div>
    </div>
  )
}

export default Categories