import User from '../entities/User';

const BASE_URL = 'https://randomuser.me/api/?results=15';

const fetchUserData = () => {
    return fetch(BASE_URL)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            console.log(result);

            const userArray = result.results;
            const ourUsers = userArray.map((user) => {
                return new User(user.picture, user.name.first, user.email, user.registered.date);
            });


            return ourUsers;
        });
}

export {
    fetchUserData
}