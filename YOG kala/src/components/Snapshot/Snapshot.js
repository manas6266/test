import React,{useState} from 'react';
import {Route , NavLink} from 'react-router-dom';
import Mountain from '../Mountain';
import Beaches from '../Beaches';
import Food from '../Food';
import Birds from '../Birds';
import classes from './Snapshot.css';
import Input from '../Input/Input';
const Snapshot=(props)=>{
	const [orderForm,setOrderForm]= useState( {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Search...'
                },
                value: ''
            }})

	const inputChangedHandler = (event, inputIdentifier) => {
		        const updatedOrderForm = {
            ...orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm['name']
        };
        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        setOrderForm(updatedOrderForm);

    }
   const  clickedHandler=()=>{
    	<Mountain value={orderForm.name.value}/>
    }

		console.log(orderForm.name.value)
		const formElementsArray = [];
        for (let key in orderForm) {
            formElementsArray.push({
                id: key,
                config: orderForm[key]
            });
        }
        let form = (
            <form >
                {formElementsArray.map(formElement => (

                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(event) => inputChangedHandler(event, formElement.id)} />
                ))}
                <div className={classes.Lol}>
                <button type="submit" disabled={!orderForm.name.value} onClick={this.clickedHandler}>Search</button>
                 </div>
                </form>
                )
			return(
             <div>
             <p className={classes.snap}>Snapshot</p>
             {form}
             <div className={classes.Snapshot}>
             <header>
             <nav>
             <ul>
             <li><NavLink to="/mountain">Mountain</NavLink></li>
             <li><NavLink to="/beaches">Beaches</NavLink></li>
             <li><NavLink to="/birds">Birds</NavLink></li>
             <li><NavLink to="/food">Food</NavLink></li>
             </ul>
             </nav>
             </header>
             <Route path='/'exact component={Mountain} />
             <Route path='/mountain' component={Mountain}/>
             <Route path='/beaches' component={Beaches}/>
             <Route path='/birds' component={Birds}/>
             <Route path='/food' component={Food}/>
             </div>
             </div>
             )
			
}
export default Snapshot
