import React,{useState,useEffect} from 'react';
import { projectStore } from '../firebase/config';

const useFireStore = (collection) => {
    const [docs,setDocs] = useState([]);

    useEffect(()=>{
        const unsub=projectStore.collection(collection)
        .orderBy('createdAt','desc')
        .onSnapshot((snap)=>{
            let document=[];
            snap.forEach(doc=>{
                document.push({...doc.data(),id:doc.id});
            })
            setDocs(document);
        })
        return ()=>unsub();
    },[collection])
   return {docs}
}

export default useFireStore