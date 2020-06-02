import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    let transformedIngredients = Object.keys(props.ingridients).map((key)=>{
        return [...Array(props.ingridients[key])].map((_,i)=>{
            return <BurgerIngredients key = { key+i } type={ key }/>
        })
    }).reduce(( finalArray, currentElement )=>{
        return finalArray.concat(currentElement)
    },[]);

    if( transformedIngredients == 0 ){
        transformedIngredients = <p className="lead">Please start adding ingridients</p>
    }

    return <div className = { classes.Burger }>
        <BurgerIngredients type = 'bread-top'/>
        {transformedIngredients}
        <BurgerIngredients type = 'bread-bottom'/>
    </div>
}

export default Burger;