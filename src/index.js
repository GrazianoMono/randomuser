import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.scss";
import useGetData from './hooks/useGetData.js'

// COMPONENTS
import Button from './components/Button';
import UserList from './components/UserList';

function App() {
	const { state, fetchData } = useGetData()

    return (
        <div>
            <Button onClick={fetchData} label="Fetch random Users" />
			{state.loading && <span>Loading...</span>}
			<UserList items={state.data} />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
