import css from "./Display.module.css";

let Display = ({displayValue}) =>{

    return <>
         <input className={css.display} type="text" value={displayValue} readOnly/>
    </>;
}

export default Display;