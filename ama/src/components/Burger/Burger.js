import React from 'react';
import classes from './Burger.css';
import Burgeringredients from './Burgeringredients/Burgeringredients';
const burger =(props)=>{
 	let transformed=Object.keys(props.ingredients)
	.map(igKey => {
		return [...Array(props.ingredients[igKey])].map((_,i)=>{
			return <Burgeringredients key={igKey+i} type={igKey}/>;
		});
	})
	.reduce((arr,el)=>{//it lets you to reduce a set of arrays as in transformed array to a single array
		return arr.concat(el)//it will concat all the array elements in a single array
	},[]);//initially passed an empty array
	if(transformed.length === 0)
	{
		transformed=<p>Please start adding ingredients</p>;
	}
	return(
      <div className={classes.Burger}>
      	<Burgeringredients type="bread-top" />
        {transformed}     	
       	<Burgeringredients type="bread-bottom" />
      </div>
		)
}
export default burger;  