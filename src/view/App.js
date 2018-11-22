import React, { Component } from 'react'
import { Header } from "./partials/header"
import { Footer } from "./partials/footer"
import { UserList } from "./users/UserList"
import { fetchUserData } from "../services/userService"
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isGrid: false,
			users: [],
		}
	}

	componentDidMount() {
		const users = fetchUserData();

		users.then((listOfUsers) => {
			console.log(listOfUsers);
			this.setState({
				users: listOfUsers
			});
			console.log(this.state);
		});

	}


	render() {
		return (
			<div>
				<Header />
				<main>
					<UserList users={this.state.users} />
				</main>
				<Footer />
			</div>
		);
	}
}


export default App;
