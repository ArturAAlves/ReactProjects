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

            // console.log(state.basket)
            // const filter = state.basket.filter(item => {
            //     if (item.id !== action.item.id) {
            //         return item
            //     }
            //     // if (item.id === action.item.id) {
            //     //     return item.qty = 2
            //     // }

            // })

            // const filter = state.basket.reduce((acc, item, i) => {
            //     if (item.id !== action.item.id) {
            //         acc.push(item)
            //     }
            //     // else if (item.id === action.item.id) {
            //     //     let { ...currItem } = item
            //     //     currItem.qty += 1
            //     // }
            //     return acc
            // }, [])
            // console.log(filter)


            // const addCount = state.basket.map((item) => {
            //     let updated = [...state.basket];



            //     return updated
            // })
            // console.log(addCount)

            // const filter = state.basket.filter(item => {
            //     if (item.id !== action.item.id) {
            //         return item
            //     }
            //     // if (item.id === action.item.id) {
            //     //     return item.qty = 2
            //     // }

            // })


            let val = () => (state, action) => {
                let item
                state.forEach(element => {
                    item.push(element)

                });
                return item
            }
            console.log(val())

            return {
                basket: [...state.basket, action.item]
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
        // case 'ADDED_ITEM':
        //     return {
        //         ...state, basket: [...state.basket, action.item]
        //     }


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