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
			headerTitle: '',
			isGrid: false,
			users: [],
		}
	}

	componentDidMount() {
		const users = fetchUserData();

		users.then((listOfUsers) => {
			console.log(listOfUsers);
			this.setState({
				headerTitle: 'React Users',
				users: listOfUsers
			});
			console.log(this.state);
		});

	}

	changeView = () => {
		this.setState({ isGrid: !this.state.isGrid })
	}

	render() {
		return (
			<div>
				<Header changeView={this.changeView} title={this.state.headerTitle} isGrid={this.state.isGrid} />
				<main>
					<UserList users={this.state.users} isGrid={this.state.isGrid} />
				</main>
				<Footer />
			</div>
		);
	}
}


export default App;
