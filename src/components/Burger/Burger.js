import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {

    let TransformedIngredients = Object.keys(props.ingridients).map((key)=>{
        return [...Array(props.ingridients[key])].map((_,i)=>{
            return <BurgerIngredients key = { key+i } type={ key }/>
        })
    }).reduce(( finalArray, currentElement )=>{
        return finalArray.concat(currentElement)
    },[]);

    console.log(TransformedIngredients)
    if( TransformedIngredients == 0 ){
        TransformedIngredients = <p className="lead">Please start adding ingridients</p>
    }

    return <div className = { classes.Burger }>
        <BurgerIngredients type = 'bread-top'/>
        {TransformedIngredients}
        <BurgerIngredients type = 'bread-bottom'/>
    </div>
}

export default Burger;