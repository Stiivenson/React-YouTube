// Generate token for User
const generateToken = () => {
    return Math.random().toString(36).substr(2)
}

// Authenticate User in System
export const authUser = (login) => {
    // Get token
    const token = generateToken() + generateToken();

    // Get userCollection forn LocalStorage
    let user_collection = JSON.parse(localStorage.getItem("user_collection"));
    if (user_collection === null) {
        // If userCollection is null - create new with User & token
        user_collection = [];

        const user = {
            login: login,
            token: token,
            queries: []
        }
        user_collection.push(user);

        localStorage.setItem('user_collection', JSON.stringify(user_collection));
    } else {
        // Find User and add token
        user_collection.map(user => {
            if (user.login === login) {
                user.token = token;
                return;
            }
        });
        localStorage.setItem('user_collection', JSON.stringify(user_collection));
    }
}

// Check User token - for auto authentication
export const checkToken = () => {
    let user_collection = JSON.parse(localStorage.getItem("user_collection"));
    let authorizedUser = {
        login: ''
    };

    // If userCollection is null - just return empty string
    if (user_collection === null) {
        return authorizedUser;
    }

    // If User has token - return login
    user_collection.map(user => {
        if (user.token !== '') {
            authorizedUser.login = user.login;
            return;
        }
    });
    return authorizedUser;
}