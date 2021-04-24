export const authTrue = () => ({
  type: 'AUTH_TRUE',
  payload: {
    isAuth: true,
  },
});

export const changeCategory = (props) => ({
  type: 'CHANGE_CATEGORY',
  payload: {
    categiryId: props,
  },
});
