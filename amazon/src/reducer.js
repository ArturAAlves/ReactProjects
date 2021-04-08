export const initialState = {
    basket: []
}

//Slector
export const getBasketTotal = (basket) => {
    console.log(basket.price)
    basket.reduce((acc, item) => acc += item.price, 0)
}


const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item]
            }
        default:
            return state;
    }
}

export default reducer