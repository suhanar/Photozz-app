import React from 'react';
import useStorage from '../hook/useStorage';

const ProgressBar = ({file,setFile,category}) => {
    const { url, progress} = useStorage(file);
   // console.log(progress,url);
  
    // useEffect(()=>{
    //     if(url){
    //         setFile(null);
    //     }
    //    },[url,setFile])
   
   
  return (
    <div className='progress-div'>
        <div  className='progress' style={{width: progress + '%'}}></div>
    </div>
  )
}

export default ProgressBar