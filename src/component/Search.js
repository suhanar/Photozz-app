import React from 'react';
import Categories from './Categories';

function Search({search,setSearch}) {
  return (
    <div className='search'>
        <input type="text" placeholder="Search..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <div className='clear-btn'>
        <button onClick={()=>setSearch('')}>Clear</button>
        </div>
        
       
    </div>
  )
}

export default Search