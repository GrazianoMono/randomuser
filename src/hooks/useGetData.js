import { useReducer } from "react";

const url = 'https://random-data-api.com/api/users/random_user?size=10'

const initialFetchState = {
    loading: false,
    status: '',
    data: [],
    error: ''
}

function reducer(state, action) {
	switch (action.type) {
		case "loading":
			return {
				status: "loading",
				loading: true,
			};
		case "success":
			return {
				status: "success",
				loading: false,
				data: action.data,
			};
		case "error":
			return {
				status: "error",
				loading: false,
				error: action.error,
			};
		default:
				return state
	}
}

export default function useGetData() {
	const [state, dispatch] = useReducer(reducer, initialFetchState);

	const fetchData = async () => {
		dispatch({ type: 'loading' })
		try {
			const res = await fetch(url)
			const data = await res.json()
			dispatch({type: 'success', data})
		} catch (e) {
			console.log(e)
			dispatch({ type: 'error', error: e})
		}
	}

    return { state, fetchData }
}