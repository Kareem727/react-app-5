import React,{ useCallback, useState } from 'react';
import './App.css';
import DemoOutput from './components/Demo/Demo';
import Button from './components/UI/Button/Button'
function App() {

  const [show , setONShow] = useState(false);
  const [toggelShow, setToggelShow] =useState(false);
  
  const onToggleShowHandler = () =>{
    setToggelShow(true);
  }
  const onHandelShow = useCallback(() =>{

   if(toggelShow){
    setONShow((preevShow) => !preevShow);
    console.log('App runnuning');
   }

  },[toggelShow]);


  return (
    <div className="App">
      <header className="App-header">
      <p>Dealing with callBack, memo</p>
      <DemoOutput showwwwww={show}/>
        {/* {show && <p>Hello 2</p>}
         */}
         

        <Button onClick={onHandelShow}>Click 1</Button>
        <br/>
        <Button onClick={onToggleShowHandler}>Click 2 to excute 1</Button>

      </header>
    </div>
  );
}

export default App;
