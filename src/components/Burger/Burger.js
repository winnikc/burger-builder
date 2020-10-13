import React from 'react';
import {withRouter} from 'react-router-dom';

import classes from './Burger.module.css';
import BurgerIngridient from './BurgerIngridient/BurgerIngridient'

const burger = (props) => {
    console.log('Props from burger', props);
    let transformedIngredients = Object.keys(props.ingredients).map(
        igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
               return  <BurgerIngridient key={igKey + i} type={igKey}/>
            });
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, []);

        if(transformedIngredients.length ===0) {
            transformedIngredients = <p>Please start adding ingredients!</p>
        }

    console.log(transformedIngredients);

    return(
        <div className={classes.Burger}>
            <BurgerIngridient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngridient type="bread-bottom"/>
        </div>
    );
};

export default withRouter(burger);