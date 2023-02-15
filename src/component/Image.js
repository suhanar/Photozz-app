import React from 'react';
import useFireStore from '../hook/useFireStore';

const Image = ({show,setShow,search,setSearch}) => {
    const {docs} = useFireStore('images');
    //console.log(docs)
    
  return (
    
       <div className='img'>
      {/* { docs &&  docs.map(doc => (
          <div className='img-cl' key={doc.id}>
              <img src={doc.url} /> 
          </div>
      )) 
    }  */}

    {
      docs.filter((val)=>{
        if(search==''){
          return val
        }
        else if(val.description.toLowerCase().includes(search.toLowerCase())){
          return val
        }
      }).map((doc)=>(
        <div className='img-cl' key={doc.id}>
            <img src={doc.url} accept="image/*" /> 
            
        </div>
    ))
    }
  </div>
    
    
  )
}

export default Image