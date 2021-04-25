import initialState from '../initialState';

const reducer = (state = initialState, action) => {
  let newValue;
  switch (action.type) {
    case 'AUTH_TRUE':
      return { ...state, isAuth: action.payload.isAuth };

    case 'PROFILE_VIEW':
      return { ...state, activProfile: action.payload.activProfile };

    case 'CHANGE_CATEGORY':
      newValue = action.payload.categiryId;
      return { ...state, activeCategoryId: newValue };

    case 'CHANGE_USERINFO':
      newValue = action.payload.userInfo;
      return { ...state, userInfo: newValue };

    default:
      return state;
  }
};

export default reducer;
