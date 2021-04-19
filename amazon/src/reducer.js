export const initialState = {
    basket: [],
    user: null
}


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
            //     return item.id !== action.item.id ? (action.qty += 1) : (action.item)
            // })
            // console.log(filter)

            // let teste = () => {
            //     for (let index = 0; index < state.basket.length; index++) {
            //         if (state.basket[index].id === action.item.id) {
            //             console.log(state.basket[index].id)
            //             return action.item.qty += 1

            //         }
            //         return action.item

            //     }
            // }
            // console.log(teste())
            let countBasket = [...state.basket];
            const countPlus = state.basket.find(basketItem => {
                return basketItem.id === action.item.id

            })
            const u = state.basket.findIndex(
                basketItem => basketItem.id === action.item.id
            )

            if (u >= 0) {
                countBasket.splice(u, 1)
                countPlus.qty += 1
                countBasket.push(countPlus)
            }

            else if (u < 0) {
                countBasket.push(action.item)
            }

            return {
                ...state, basket: countBasket
            }


        case 'REMOVE_FROM_BASKET':
            // const index = state.basket.findIndex(
            //     basketItem => basketItem.id === action.id
            // )
            // let newBasket = [...state.basket];

            // if (index >= 0) {
            //     newBasket.splice(index, 1)
            // }
            const index = state.basket.filter(
                basketItem => basketItem.id !== action.id
            )

            return {
                ...state, basket: index
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

//Slector
export const getBasketTotal = (basket) => (
    basket.reduce((acc, item) => acc + parseFloat(item.price * item.qty), 0)
)
export default reducer