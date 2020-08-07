const generateToken = () => {
    return Math.random().toString(36).substr(2)
}

export const authUser = (login) => {
    const token = generateToken() + generateToken();

    let user_collection = JSON.parse(localStorage.getItem("user_collection"));
    if (user_collection === null) {

        user_collection = [];

        const user = {
            login: login,
            token: token
        }
        user_collection.push(user);

        localStorage.setItem('user_collection', JSON.stringify(user_collection));
    }

    user_collection.map(user => {
        if (user.login === login) {
            user.token = token;
            return;
        }
    });
    localStorage.setItem('user_collection', JSON.stringify(user_collection));
}

export const checkToken = () => {
    let user_collection = JSON.parse(localStorage.getItem("user_collection"));
    let authorizedUser = {
        login: ''
    };

    user_collection.map(user => {
        if (user.token !== '') {
            authorizedUser.login = user.login;
            return;
        }
    });

    return authorizedUser;
}