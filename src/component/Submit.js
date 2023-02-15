import React from 'react';
import {useState} from 'react';
import {storage,projectStore,timestamp} from "./Firebase/config"
import Image from './Image';

function Submit() {
  
       



  const allInputs = {imgUrl: '',description:'Male'}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
   

  console.log(imageAsFile)
 const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
  }

  


const handleFireBaseUpload = e => {
  e.preventDefault()
console.log('start of upload')
// async magic goes here...
if(imageAsFile === '') {
  console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
}
const uploadTask = storage.ref(imageAsFile.name).put(imageAsFile);
const collectionTable = projectStore.collection('images');
//const collectionTable = projectStore.collection('images');
//initiates the firebase side uploading 
uploadTask.on('state_changed', 
(snapShot) => {
  //takes a snap shot of the process as it is happening
  console.log(snapShot)
}, (err) => {
  //catches the errors
  console.log(err)
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
}

 

  return (
    <div className="App">

<form onSubmit={handleFireBaseUpload}>
        <input 
          type="file"
          onChange={handleImageAsFile}
        />
        <button>upload to firebase</button>
      </form>
       {/* <img src={imageAsUrl.imgUrl} alt="image tag" />  */}

    <Image />
    </div>
  );




    
  
}

export default Submit