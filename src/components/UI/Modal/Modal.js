import React from 'react';
import classes from './Modal.module.css';

const Modal = (props) => {
    
    console.log(props.ingredients)
    const ingridientsList = {...props.ingredients}
    const arr = [];
    for(let key in ingridientsList){
        arr.concat(<li>{key} : {ingridientsList[key]} </li>);
    }

    return (
        <div className = { classes.Modal }>
            <p className = {classes.Title} >Modal Title</p>
            <hr></hr>
            <div>
                <ul>
                    { arr }
                </ul>
            </div>
            {props.children}
        </div>
    );
}

export default Modal;