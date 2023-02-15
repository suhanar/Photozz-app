import React,{useState,useEffect} from 'react';
import Upload from './Upload';
import {storage,projectStore,timestamp} from '../firebase/config';
import Image from './Image';
import Select from "react-select";


function Share({show,setShow,error,setError}) {
    const options = [
        { value: "food", label: "Food" },
        { value: "plants", label: "Plants" },
        { value: "mountain", label: "Mountain" },
        { value: "flower", label: "Flower" },
        { value: "ocean", label: "Ocean" },
        { value: "forest", label: "Forest" },
        { value: "animals", label: "Animals" },
        { value: "fish", label: "Fish" },
        { value: "electronics", label: "Electronics" },
        { value: "house", label: "House" },
        { value: "snow", label: "Snow" },
        { value: "cloud", label: "Cloud" },
      ];

      const allInputs = {imgUrl:'',description:''};

   

    //const allInputs = {imgUrl: '',description:category}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs);


    const handleChange = (e) => {
        //setCategory(e);
        imageAsUrl.description = e.value
       
       console.log(e.value);
    }

    console.log(imageAsFile)
    const types = ['image/jpeg','image/png']
    const handleImageAsFile = (e) => {
       
         const image = e.target.files[0]


         if(image && types.includes(image.type)){
            setImageAsFile(imageFile => (image));
            setError('');
            
           }else{
            console.log('No file selected');
           
            setError('Please select file with type jpeg or png');
            alert('This file is not acceptable please select jpeg or png');
           
           }
         console.log(image);
        
  }


  const handleFireBaseUpload = e => {
     
      e.preventDefault();
     
      
      console.log('start of upload')
 
      if(imageAsFile === '') {
        console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
      }
      const uploadTask = storage.ref(imageAsFile.name).put(imageAsFile);
      const collectionTable = projectStore.collection('images');
  //const collectionTable = projectStore.collection('images');
  
      uploadTask.on('state_changed', 
      (snapShot) => {
    //takes a snap shot of the process as it is happening
        console.log(snapShot)
        }, (err) => {
    //catches the errors
        console.log(err);
        alert(err);
        }, () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage.ref(imageAsFile.name).getDownloadURL()
        .then(fireBaseUrl => {
        const createdAt = timestamp();
        collectionTable.add({url:fireBaseUrl,createdAt,description:imageAsUrl.description});
        setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}));
      
       
       //collectionTable.add({imgUrl: fireBaseUrl})
     })
     
     
  })
  //
  setShow(!show);
  //alert('Successfully added your image');
  
  }
  
   
   
        
   

  

    

    

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(!show);


    }


    
  return (
    <div className='share' id="share">
        <h1>Upload Photo</h1>
        <form onSubmit={handleFireBaseUpload}>
        <input type="file" onChange={handleImageAsFile}/>
           

        <Select options={options}  onChange={handleChange} />


        <button type="submit"  >Share Photo</button>
            
            
        </form>

      
       
        
    </div>
  )
}


//export {passCategory}

export default Share;
