export const authTrue = (props) => ({
  type: 'AUTH_TRUE',
  payload: {
    isAuth: props,
  },
});

export const changeCategory = (props) => ({
  type: 'CHANGE_CATEGORY',
  payload: {
    categiryId: props,
  },
});
