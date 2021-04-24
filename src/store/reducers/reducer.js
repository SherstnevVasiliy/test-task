import initialState from '../initialState';

const reducer = (state = initialState, action) => {
  let newValue;
  switch (action.type) {
    case 'AUTH_TRUE':
      return { ...state, isAuth: action.payload.isAuth };

    case 'CHANGE_CATEGORY':
      console.log(action.payload.categiryId);
      newValue = action.payload.categiryId;
      return { ...state, activeCategoryId: newValue };
    default:
      return state;
  }
};

export default reducer;
