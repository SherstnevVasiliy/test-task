/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './mainPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { profileView, authTrue, changeUserInfo } from '../store/actions/action';

const Account = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo);
  const isAuth = useSelector((state) => state.isAuth);
  const handleClickSwith = () => {
    dispatch(profileView(false));
  };
  const handleClickOut = () => {
    dispatch(authTrue(false));
    dispatch(profileView(false));
    dispatch(changeUserInfo({}));
  };

  if (isAuth) {
    return (
      <div className="wrap">
        <div className="page-header-avatar-wrap">
          <div className="page-header-user">
            <span className="page-header-arrow" onClick={handleClickSwith}>
              <img alt="" />
            </span>
            <span className="page-header-editor">
              <img alt="" />
            </span>
          </div>
          <div className="user-info">
            <figure>
              <img
                className="big-avatar"
                src="https://i.ibb.co/Kb1cCy5/avatar.jpg"
                alt=""
              />
            </figure>
            <div className="user-name-mail">
              <p className="user-name">
                {userInfo.name.firstname} {userInfo.name.lastname}
              </p>
              <p className="user-mail">{userInfo.email}</p>
            </div>
          </div>
        </div>
        <div className="btn-sign-out">
          <input
            type="submit"
            className="sign-in"
            value="Выйти"
            onClick={handleClickOut}
          />
        </div>
      </div>
    );
  }
  return <p>No render</p>;
};
export default Account;
