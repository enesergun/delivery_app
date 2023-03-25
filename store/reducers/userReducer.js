const initialState = {
  notifications: null,
  settings: null,
  information: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
};

export default userReducer;
