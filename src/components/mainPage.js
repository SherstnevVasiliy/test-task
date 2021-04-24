import React, { useState } from 'react';
import './mainPage.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authTrue } from '../store/actions/action';

const MainPage = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const loginFunc = async (props) => {
    let authUser = {};
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        // eslint-disable-next-line react/prop-types
        if (response.data[i].email.toLowerCase() === props.toLowerCase()) {
          authUser = response.data[i];
          alert(`Welcome! ${authUser.name}`);
          dispatch(authTrue('true'));
        }
      }
      if (authUser.id) {
        console.log(authUser);
      } else {
        alert('Auth FAIL');
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
      loginFunc(login);
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
          type="text"
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
