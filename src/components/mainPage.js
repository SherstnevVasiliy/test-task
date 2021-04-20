import React from 'react';

const MainPage = () => (
  <div className="wrap">
    <div className="cantainer-reg">
      <h1>Рады видеть вас снова!</h1>
      <h2>Введите свой пароль и Email</h2>
    </div>
    <form className="reg-form cantainer-reg">
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="password" placeholder="Password" />
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

export default MainPage;
