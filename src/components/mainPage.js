/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './mainPage.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authTrue, changeUserInfo } from '../store/actions/action';

const MainPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginFunc = async (propsLogin, propsPassword) => {
    let authUser = {};
    try {
      const response = await axios.get('https://fakestoreapi.com/users');
      console.log(response.data[0]);
      for (let i = 0; i < response.data.length; i++) {
        console.log(response.data[i].email, response.data[i].password);
        if (
          response.data[i].email === propsLogin &&
          response.data[i].password === propsPassword
        ) {
          authUser = response.data[i];
          dispatch(changeUserInfo(authUser));
          dispatch(authTrue(true));
          alert(
            `Welcome! ${authUser.name.firstname} ${authUser.name.lastname}`
          );
        }
      }
      if (!authUser.id) {
        alert('Пользователь не зарегистрирован');
      }
    } catch (err) {
      alert(err);
    }
  };

  const clickHandler = (event) => {
    event.preventDefault();
    if (login === '' || password === '') {
      alert('Поля не должны быть пустыми...');
    } else {
      loginFunc(login, password);
      setLogin('');
      setPassword('');
    }
  };

  return (
    <div className="wrap">
      <div className="cantainer-reg">
        <h1>Рады видеть вас снова!</h1>
        <h2>Введите свой пароль и Email</h2>
      </div>
      <form className="reg-form cantainer-reg" onSubmit={clickHandler}>
        <input
          onChange={(event) => setLogin(event.target.value)}
          value={login}
          className="input"
          type="email"
          placeholder="Email"
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          className="input"
          value={password}
          type="password"
          placeholder="Password"
        />
        <p className="forgot">Забыли пароль?</p>
        <input type="submit" className="sign-in" value="Войти" />
        <div className="no-accaunt-wrap">
          <p className="no-accaunt">Нет аккаунта?</p>
          <ul className="reistration">
            <li>
              <a>Зарегистрируйтесь</a>
            </li>
          </ul>
        </div>
      </form>
      <div className="cantainer-reg">
        <ul className="media-social">
          <li>
            <a
              href="https://www.google.ru/"
              target="_blank"
              className="media-google"
              rel="noreferrer"
            >
              <span />
            </a>
          </li>
          <li>
            <a
              href="https://ru-ru.facebook.com/"
              target="_blank"
              className="media-facebook"
              rel="noreferrer"
            >
              <span />
            </a>
          </li>
          <li>
            <a
              href="https://vk.com/"
              target="_blank"
              className="media-vk"
              rel="noreferrer"
            >
              <span />
            </a>
          </li>
          <li>
            <a
              href="https://www.apple.com/ru/"
              target="_blank"
              className="media-apple"
              rel="noreferrer"
            >
              <span />
            </a>
          </li>
        </ul>
      </div>
      <div className="wrap-bg" />
    </div>
  );
};

export default MainPage;
