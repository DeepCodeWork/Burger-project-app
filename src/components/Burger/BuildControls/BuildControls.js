import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const BuildControls = (props) => {

    const controls = [
        { lable : "Bacon", type : "bacon" },
        { lable : "Cheese", type : "cheese" },
        { lable : "Meat", type : "meat" },
        { lable : "Salad", type : "salad" }
    
    ]

    return (
        <div className = { classes.BuildControls }>
            {controls.map((item)=>{
                return <BuildControl type = { item.type } lable = { item.lable }/>
            })}
        </div>
    );
}

export default BuildControls;