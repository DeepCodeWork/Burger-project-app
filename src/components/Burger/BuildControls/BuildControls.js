import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {

    const controls = [
        { lable : "Bacon",  type : "bacon" },
        { lable : "Cheese", type : "cheese" },
        { lable : "Meat",   type : "meat" },
        { lable : "Salad",  type : "salad" }
    
    ]

    return (
        <div className = { classes.BuildControls }>
        <p>Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map((item)=>{
                return <BuildControl 
                    type = { item.type } 
                    lable = { item.lable }
                    added = { ()=>{props.ingredientAdded(item.type)} }
                    removed = { ()=>{props.ingredientRemoved(item.type)} }
                    key = { item.type }
                    disable = { props.disabled[item.type] }
                />
            })}
        <button className = {classes.OrderButton} disabled = { props.numberOfItems === 0 }>ORDER NOW</button>    
        </div>
    );
}

export default BuildControls;