
import React from 'react'
import PropTypes from 'prop-types'


const UserListItem = (props) => {
    return (
        <li className="collection-item avatar">
            <img src={props.photo} alt='user' className="circle" />
            <span className="title">name: {props.name}</span>
            <p>email: {props.email}</p>
            <p>date of birth: {props.dateOfBirth}</p>
        </li>
    )
}

UserListItem.propTypes = {
    photo: PropTypes.string
}

UserListItem.defaultProps = {
    photo: ''
}

export {
    UserListItem
}