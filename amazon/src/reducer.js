export const initialState = {
    basket: [],
    user: null
}

//Slector
export const getBasketTotal = (basket) => (
    basket.reduce((acc, item) => acc + parseFloat(item.price), 0)
)


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                basketItem => basketItem.id === action.id
            )
            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1)
            }
            return {
                ...state, basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state, user: action.user
            }


        // return {
        //     ...state, basket: state.basket.reduce((acc, item) => {
        //         if (item.id !== action.id) acc.push(item)
        //         return acc
        //     }, [])
        // }
        default:
            return state;
    }
}

export default reducer