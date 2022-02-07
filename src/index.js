import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import useGetData from './hooks/useGetData.js'

// COMPONENTS
import Button from './components/Button';
import UserList from './components/UserList';

function App() {
	const { state, fetchData } = useGetData()

    return (
        <div className="hero">
            <Button onClick={fetchData} label="Fetch random Users" />
			<UserList items={state.data} loading={state.loading}/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));
