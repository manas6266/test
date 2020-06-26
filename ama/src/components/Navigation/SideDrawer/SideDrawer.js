import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
const SideDrawer =(props)=>{
let attachedClasses=[classes.SideDrawer,classes.Close];
if(props.open){
	attachedClasses=[classes.SideDrawer,classes.Open];
}
return(
	<div>
	  <Backdrop show={props.open} clicked={props.closed}/>
	<div className={attachedClasses.join(' ')}>
	   <nav>
	   <NavigationItems isAuthenticated={props.isAuth}/>
	   </nav>
	</div>
	</div>
	);
}
export default SideDrawer;