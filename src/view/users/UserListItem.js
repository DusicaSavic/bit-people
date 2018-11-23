
import React from 'react'
import PropTypes from 'prop-types'


const UserListItem = (props) => {
    const { photo } = props.user;
    return (
        <li className="collection-item avatar">
            <img src={photo.thumbnail} alt='user' className="circle" />
            <span className="title">name: {props.user.getFullName()}</span>
            <p>email: {props.user.getHiddenEmail()}</p>
            <p>date of birth: {props.user.getBirthFormat()}</p>
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