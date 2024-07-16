import style from "./ButtonContainer.module.css";

let ButtonContainer = ({onButtonClick}) =>{

    const buttonName = ['AC','DEL','%','/','9','8','7','+','6','5','4','-','3','2','1','*','00','0','.','=']
    return <>
      <div className={style.buttonContainer}>
        {buttonName.map(buttonName => <button className={style.button} onClick={()=>onButtonClick(buttonName)}>{buttonName}</button>)}
      </div>
    </>;
}
export default ButtonContainer;