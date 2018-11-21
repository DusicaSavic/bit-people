
import React from 'react'
import { UserItem } from './UserItem'

const UserList = (props) => {

    const userList = props.users.map((user, index) => {
        return <UserItem photo={user.photo} email={'bit@bit.com'} />
    })

    return (
        <div>
            {userList};
        </div>
    )
}

export {
    UserList
}