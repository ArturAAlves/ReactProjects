export const initialState = {
	user: null,
};

export const actionTypes = {
	SET_USER: "SET_USER",
};

const reducer = (state, action) => {
	console.log(action);
	switch (action.typpe) {
		case actionTypes.SET_user:
			return {
				...state,
				user: action.user,
			};

		default:
			return state;
	}
};
export default reducer;
