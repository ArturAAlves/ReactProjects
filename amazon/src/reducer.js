export const initialState = {
	basket: [],
	total: 0,
	user: null,
	contacts: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_TO_BASKET":
			return {
				...state,
				basket: action.storage,
			};

		case "ADD_TO_BASKET":
			let countBasket = [...state.basket];
			const countPlus = state.basket.find((basketItem) => {
				return basketItem.id === action.item.id;
			});

			const u = state.basket.findIndex(
				(basketItem) => basketItem.id === action.item.id
			);

			if (u >= 0) {
				countBasket.splice(u, 1);
				countPlus.qty += 1;
				countBasket.push(countPlus);
			} else if (u < 0) {
				countBasket.push(action.item);
			}

			return {
				...state,
				basket: countBasket,
			};

		case "CLEAR_BASKET":
			// const index = state.basket.findIndex(
			//     basketItem => basketItem.id === action.id
			// )
			// let newBasket = [...state.basket];

			// if (index >= 0) {
			//     newBasket.splice(index, 1)
			// }

			return {
				...state,
				basket: [],
			};

		case "REMOVE_FROM_BASKET":
			// const index = state.basket.findIndex(
			//     basketItem => basketItem.id === action.id
			// )
			// let newBasket = [...state.basket];

			// if (index >= 0) {
			//     newBasket.splice(index, 1)
			// }
			const index = state.basket.filter(
				(basketItem) => basketItem.id !== action.id
			);

			return {
				...state,
				basket: index,
			};

		case "SET_USER":
			return {
				...state,
				user: action.user,
			};

		case "QTY_FROM_BASKET":
			// console.log(action)
			let qtyBasket = [...state.basket];
			const x = state.basket.findIndex(
				(basketItem) => basketItem.id === action.id
			);
			if (x >= 0) {
				qtyBasket[x].qty = parseInt(action.qty);
			}

			return {
				...state,
				basket: qtyBasket,
			};

		default:
			return state;
	}
};
export default reducer;

export const getBasketTotal = (basket) =>
	basket.reduce((acc, item) => acc + parseFloat(item.price * item.qty), 0);

export const getTotalProducs = (basket) => {
	let val = 0;
	basket.forEach((element) => {
		val = val + element.qty;
	});

	return val;
};
