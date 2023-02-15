import {useState} from 'react';
import './App.css';
import Header from './component/Header';
import Panel from './component/Panel';
import Upload from './component/Upload';
import Image from './component/Image';
import Share from './component/Share';
import ProgressBar from './component/ProgressBar';






function App() {
  //console.log(process.env);
  const [category,setCategory] = useState('nature');
  const [search,setSearch] = useState('');
  const [show,setShow] = useState(false);
  const [error,setError] = useState('');
  return (
    <div className="App">
      <Header show={show} setShow={setShow} />
      <div className='parent-div'>

      
    <div>
         
         <Panel search={search} setSearch={setSearch}/>
    </div>
    
    <div id="div">
      
         
         { show && <Share category={category} setCategory={setCategory} search={search} setSearch={setSearch} show={show} setShow={setShow} error={error} setError={setError}/>}
         <Image search={search} setSearch={setSearch}  id="img1"/>
     </div>
     </div>
     
    </div>
  );
}

export default App;
