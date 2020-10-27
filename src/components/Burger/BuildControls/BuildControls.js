import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];


const buildControls = props => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                addIngredient={() => props.addIngredient(control.type)}
                removeIngredient={() => props.removeIngredient(control.type)}
                disabled={props.disabled[control.type]}/>
        ))}
        <button 
            className={classes.OrderButton}
            disabled={!props.purchaseable}
            onClick={props.purchasing}>{props.isAuth ? "Order Now" : "Sign Up To Continue"}</button>
    </div>
);

export default buildControls;