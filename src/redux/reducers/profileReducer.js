const initialState = {
  visits: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "COUNT":
      return {
        ...state,
        visits: payload,
      };

    default:
      return state;
  }
};
