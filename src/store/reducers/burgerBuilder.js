import * as actionType from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
};

const addIngredient = (state, action) => {
    const updatedIngredient = { [action.ingredient]: state.ingredients[action.ingredient] + 1 };
            const updatedIngredients = updateObject(state.ingredients, updatedIngredient);
            const updatedState = {
                ingredients: updatedIngredients,
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredient],
                building: true
            }
            return updateObject(state, updatedState);
}

const removeIngredient = (state, action) => {
    const updatedIngredient2 = { [action.ingredient]: state.ingredients[action.ingredient] - 1 };
            const updatedIngredients2 = updateObject(state.ingredients, updatedIngredient2);
            const updatedState2 = {
                ingredients: updatedIngredients2,
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredient],
                building: true
            }
            return updateObject(state, updatedState2);
}

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
        salad: action.ingredients.salad,
        bacon: action.ingredients.bacon,
        cheese: action.ingredients.cheese,
        meat: action.ingredients.meat
    },
    totalPrice: 4,
    building: false,
    error: false} );
}

const fetchIngredients = (state, action) => {
    return updateObject(state, { error: true });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.ADD_INGREDIENT: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionType.SET_INGREDIENTS: return setIngredients(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return fetchIngredients(state, action);
        default: return state;
    }
}

export default reducer;