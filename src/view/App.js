import React, { Component } from 'react'
import { Header } from "./partials/header"
import { Footer } from "./partials/footer"
import { UserList } from "./users/UserList"
import { fetchUsers } from "../services/userService"


class App extends Component {
  render() {
    const users = fetchUsers();

    return (
      <div>
        <Header />
        <main>
          <UserList users={users} />
        </main>
        <Footer />
      </div>
    )
  }
}


export default App;
