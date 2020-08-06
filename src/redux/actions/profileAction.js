const countVisits = () => {
  return (dispatch, getState) => {
    const numb = getState().visitors.visits + 1;
    dispatch({
      type: "COUNT",
      payload: numb,
    });
  };
};

export { countVisits as default };
