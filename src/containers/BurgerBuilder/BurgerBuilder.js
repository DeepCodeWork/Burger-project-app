import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// Price list of ingredients
const INGREDIENTS_PRICE = {
    bacon  : 0.5,
    meat   : 0.7,
    salad  : 0.5,
    cheese : 0.8
}

class BurgerBuilder extends Component {

    //Ingredient state
    state = {
        ingredients : {
            salad  : 0,
            cheese : 0,
            bacon  : 0,
            meat   : 0
        },

        finalPrice : 2
    }

    //Adding new ingredients
    addIngredientsHandler = (type) => {
        const updatedCount = this.state.ingredients[type] + 1;
        const updatedIngredientsState = {...this.state.ingredients};
        updatedIngredientsState[type] = updatedCount;
        const updatedPrice = this.state.finalPrice + INGREDIENTS_PRICE[type];
        this.setState({ingredients:updatedIngredientsState, finalPrice:updatedPrice});
    }

    //Removing ingredients
    removeIngredientsHandler = (type) => {
        if(this.state.ingredients[type] > 0){
            const updatedCount = this.state.ingredients[type]-1;
            const updatedIngredientsState = {...this.state.ingredients};
            updatedIngredientsState[type] = updatedCount;
            const updatedPrice = this.state.finalPrice - INGREDIENTS_PRICE[type];
            this.setState({ingredients:updatedIngredientsState, finalPrice:updatedPrice});
        }
    }

    render(){

        const disabledinfo = {...this.state.ingredients};

        for(let key in disabledinfo){
            disabledinfo[key] = disabledinfo[key]<=0;
        }

        return(
            <Aux>
                <Burger ingridients = { this.state.ingredients }/>
                <BuildControls 
                    ingredientAdded = { this.addIngredientsHandler }
                    ingredientRemoved = { this.removeIngredientsHandler }
                    disabled = {disabledinfo}
                    price = {this.state.finalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;