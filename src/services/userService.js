import { userData } from '../data/jsonData';
import User from '../entities/User';

const fetchUsers = () => {
    const users = userData.results.map(rawUser => {
        return new User(rawUser.name.first, rawUser.picture.thumbnail);
    });

    return users;
};


// const userList = props.listOfUsers.map((user) => {
//     return <UserItem name={user.name.first} email={user.email} dateOfBirth={(new Date(user.dob.date)).toLocaleDateString()} picture={user.picture.medium} />
// })

export {
    fetchUsers
}