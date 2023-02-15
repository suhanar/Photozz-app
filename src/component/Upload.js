import React,{useState} from 'react'
import ProgressBar from './ProgressBar';
import Share from './Share';

const Upload = ({handleImageAsFile}) => {

    const [file,setFile] = useState(null);
    const [error,setError] = useState(null);
    const [name,setName] = useState('');
    const types = ['image/jpeg','image/png']
    const handleChange =(e)=>{
        const selectFile = e.target.files[0];
        console.log(e.target.files[0])
       if(selectFile && types.includes(selectFile.type)){
        setFile(selectFile);
        setError('');
        setName(selectFile.name);
       }else{
        console.log('No file selected');
        setFile(null);
        setError('Please select file with type jpeg or png');
        setName('');
       }
    }
  return (
    <div>
        <input type="file" />
        {error && <div>{error}</div> }
        {name && <div>{name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}


    </div>
  )
}

export default Upload