import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import "./index.scss";
import noImagePlaceHolder from "./assets/images/NoImagePlaceHolder.png";
import useGetData from './fetchData.js'

function Button(props) {
    return <button onClick={props.onClick}>Fetch random Users</button>;
}

function Avatar(props) {
    const [avatar, setAvatar] = useState(noImagePlaceHolder);

    return (
        <div className="avatar">
            <img className="avatar__image" src={props.src} alt="" />
        </div>
    );
}

function UserList(props) {
	const [users, setUsers] = useState([]);

	const tempUsers = [];
	// for (const user of usersData) {
	// 	tempUsers.push(
	// 		<User
	// 			key={user.id}
	// 			user={user}
	// 		></User>
	// 	);
	// }

	// setUsers(tempUsers);

    return <div className="users-list">{props.users}</div>;
}

function User(props) {
    return <div className="user">
		<Avatar src={props.user.avatar}></Avatar>
	</div>;
}

function App() {
	const url = 'https://random-data-api.com/api/users/random_user?size=10'

	function handleClick () {
		const userData = useGetData()

	}

    return (
        <div>
            <Button onClick={handleClick}></Button>
            <UserList url={url}></UserList>
        </div>
    );
}

const app = <App></App>;

ReactDOM.render(app, document.getElementById("root"));
