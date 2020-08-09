import * as types from '../../constants/types';

export const saveQuery = ({ id, query, title, sort, maxNumb }) => (dispatch, getState) => {
  const { login } = getState().user;

  let user_collection = JSON.parse(localStorage.getItem('user_collection'));
  console.log(user_collection);
  let index = user_collection.map((user, index) => {
    if (user.login === login) return index;
  });
  console.log(user_collection[index].queries);

  const newQuery = {
    id,
    query,
    title,
    sort,
    maxNumb,
  };
  console.log(newQuery);
  user_collection[index].queries.push(newQuery);
  console.log(user_collection);
  // localStorage.setItem('user_collection', JSON.stringify(user_collection));

  dispatch({
    type: types.query.ADD,
    payload: newQuery,
  });
};

export const changeQuery = () => {};

export const deleteQuery = () => {};
