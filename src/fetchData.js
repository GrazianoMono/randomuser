import { useEffect, useReducer } from "react";

const initialFetchState = {
    loading: false,
    status: '',
    data: {},
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

export default function useGetData(url) {
	const [state, dispatch] = useReducer(reducer, initialFetchState);

    dispatch({ type: 'loading' })
    useEffect(() => {
        fetch(url).then(res => {
            if (res.ok) {
                dispatch({type: 'success', data: res.json()})
            } else throw new Error('Something went wrong')
        }).catch(e => {
            dispatch({ type: 'error', error: e})
        })

    }, [url])

    return state
}