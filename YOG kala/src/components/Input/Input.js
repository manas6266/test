import React from 'react';
import classes from './Input.css'; 
const input=(props)=>{
	let inputElement=null;
	switch(props.elementType){
		case('input'):
		inputElement=
         <div className={classes.In}>
		<input 
	    className={classes.In}
		{...props.elementConfig}
		value={props.value}
		onChange={props.changed}/>
		</div>
		break;
		 default:
            inputElement = <input
                 className='pa3 ba b--green bg-lightest-blue'      
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
	}

return(
	  <div >
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
       
       </div>
	)
};
export default input;