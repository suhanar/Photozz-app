import React,{useState} from 'react'
import Categories from './Categories'
import Search from './Search'

function Panel({search,setSearch}) {
  
  return (
    <div className='panel'>
        <Search search={search} setSearch={setSearch}/>
        <Categories search={search} setSearch={setSearch}/>
    </div>
  )
}

export default Panel