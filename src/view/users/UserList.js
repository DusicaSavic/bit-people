
import React from 'react'
import { UserListItem } from './UserListItem'

const UserList = (props) => {

    const userList = props.users.map((user, index) => {
        return <UserListItem key={index} photo={user.photo.thumbnail} name={user.name} email={user.email} dateOfBirth={user.dateOfBirth} />
    });

    return (
        <ul className="collection">
            {userList}
        </ul>
    );
}

export {
    UserList
}