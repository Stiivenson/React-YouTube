import * as types from '../../constants/types';

// Get index of current User in Collection
const getUserIndex = (user_collection, login) => {
    let userIndex;
    user_collection.map((user, index) => {
        if (user.login === login) userIndex = index;;
    });
    return userIndex;
}

// Initial Query loading from LocalStorage
export const loadQuery = (login) => (dispatch) => {
    let queryArray = [];
    let defaultQuery = {
        id: '12345',
        query: 'cats',
        title: 'Загрузить видео без сети',
        sort: "rating",
        maxNumb: 12
    }


    let user_collection = JSON.parse(localStorage.getItem("user_collection"));
    user_collection.map(user => {
        if (user.login === login) {
            queryArray = user.queries;
        }
    });

    queryArray.push(defaultQuery);

    dispatch({
        type: types.query.SET,
        payload: queryArray
    });
}

// Save new Query in Store and LocalStorage
export const saveQuery = ({
    id,
    query,
    title,
    sort,
    maxNumb
}) => (dispatch, getState) => {
    const {
        login
    } = getState().user;

    let user_collection = JSON.parse(localStorage.getItem('user_collection'));
    let userIndex = getUserIndex(user_collection, login)

    const newQuery = {
        id,
        query,
        title,
        sort,
        maxNumb,
    };

    user_collection[userIndex].queries.push(newQuery);
    localStorage.setItem('user_collection', JSON.stringify(user_collection));

    dispatch({
        type: types.query.ADD,
        payload: newQuery,
    });
};

// Edit & save Query in Store and LocalStorage
export const changeQuery = ({
    id,
    query,
    title,
    sort,
    maxNumb
}) => (dispatch, getState) => {
    const {
        login
    } = getState().user;

    let user_collection = JSON.parse(localStorage.getItem('user_collection'));
    let userIndex = getUserIndex(user_collection, login)

    const newQuery = {
        id,
        query,
        title,
        sort,
        maxNumb,
    };

    user_collection[userIndex].queries.map(query => {
        if (query.id === id) {
            query = Object.assign(query, newQuery);
        }
    })
    localStorage.setItem('user_collection', JSON.stringify(user_collection));

    console.log('newQuery', newQuery);
    dispatch({
        type: types.query.EDIT,
        payload: newQuery,
    });
};

// Delete Query from Store and LocalStorage
export const deleteQuery = (id) => (dispatch, getState) => {
    const {
        login
    } = getState().user;

    let user_collection = JSON.parse(localStorage.getItem('user_collection'));
    let userIndex = getUserIndex(user_collection, login)

    let queryIndex;
    user_collection[userIndex].queries.map((query, index) => {
        if (query.id === id) {
            queryIndex = index;
        }
    });

    if (queryIndex > -1) {
        user_collection[userIndex].queries.splice(queryIndex, 1);
    }
    localStorage.setItem('user_collection', JSON.stringify(user_collection));

    dispatch({
        type: types.query.DELETE,
        payload: id,
    });
}