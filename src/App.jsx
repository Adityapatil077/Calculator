
import { useState } from 'react';
import style from './App.module.css';
import ButtonContainer from './components/ButtonContainer';
import Display from './components/Display';

function App() {
 
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText)=>{
    if(buttonText === 'AC' || buttonText === 'DEL')
    {
        setCalVal("");
    }else if(buttonText === '=')
    {
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
      <div className={style.calculator}>
      <Display displayValue={calVal}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
