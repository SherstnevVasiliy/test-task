export const authTrue = (props) => ({
  type: 'AUTH_TRUE',
  payload: {
    isAuth: props,
  },
});

export const profileView = (props) => ({
  type: 'PROFILE_VIEW',
  payload: {
    activProfile: props,
  },
});

export const changeCategory = (props) => ({
  type: 'CHANGE_CATEGORY',
  payload: {
    categiryId: props,
  },
});

export const changeUserInfo = (props) => ({
  type: 'CHANGE_USERINFO',
  payload: {
    userInfo: props,
  },
});
