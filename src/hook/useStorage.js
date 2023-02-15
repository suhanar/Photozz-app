import React from 'react';
import { useState,useEffect } from 'react';
import {storage,projectStore,timestamp} from '../firebase/config';
import Share from '../component/Share';

const useStorage = (file) => {
    const [progress,setprogress] = useState(0);
    const [error,setError] = useState(null);
    const [url,setUrl] = useState(null);

    useEffect(()=>{
        const storageRef = storage.ref(file.name);
       

        const collectionTable = projectStore.collection('images');
        storageRef.put(file).on('state_changed',(snap)=>{
            const percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setprogress(percentage);
        },(err)=>{
            setError(err);
        },async()=> {
            const url = await storageRef.getDownloadURL();
           
            const createdAt = timestamp();
            //const category = passCategory();
            collectionTable.add({url,createdAt});

            setUrl(url);
        })

    },[file])
    return {progress,url,error}
}

export default useStorage


// var file= e.target.files[0];
// var storageRef = firebase.storage().ref('pics/' + file.name);

// var task = storageRef.put(file);   // <--- See the difference here

// task.on('state_changed' , 

// function progress(snapshot){
//     var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//     uploader.value = percentage;

// },
// function error(err){

// },
// function complete(){

// }