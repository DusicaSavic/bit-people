
import React from 'react'
import PropTypes from 'prop-types'


const UserItem = ({email,photo}) => {
    return (
        <div>
            <img src={photo} />

            <p>name</p>
            <p>{email}</p>
            <p>date of birth</p>
        </div>
    )
}

UserItem.propTypes={
    photo:PropTypes.string
}
UserItem.defaultProps={
    photo:''
}

export {
    UserItem
}