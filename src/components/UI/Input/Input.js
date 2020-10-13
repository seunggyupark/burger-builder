import classes from './Input.module.css';
import React from 'react';

const input = props => {
    let inputElement = null;
    const inputClasses = [classes.inputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case( 'input' ):
            inputElement = <input onChange={props.changed} {...props.elementConfig} className={inputClasses.join(' ')} value={props.value}/>;
            break;
        case( 'textarea' ):
            inputElement = <textarea onChange={props.changed} {...props.elementConfig} className={inputClasses.join(' ')}  value={props.value}/>;
            break;
        case ( 'select' ):
            inputElement = <select onChange={props.changed} className={inputClasses.join(' ')}  value={props.value}>
                                {props.elementConfig.options.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.displayValue}
                                    </option>
                                ))}
                           </select>
            break;
        default:
            inputElement = <input onChange={props.changed} {...props.elementConfig} className={inputClasses.join(' ')} value={props.value}/>;
    }


    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>

    );
}

export default input;