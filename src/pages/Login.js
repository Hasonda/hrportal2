import React, {FC, useContext, useState} from 'react';
import "../styles/Login.css";
import {Context} from "../index";

const Login: FC = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context);
    return (
        <div className={'login__form'}>
            <h1 className={'login__title'}>Вход</h1>
            <label className={'login__label'} htmlFor="login">Почта</label>
            <input className={'login__form__item'}
                   onChange={e => setEmail(e.target.value)}
                   value={email}
                   type="text"
                   placeholder="Почта"/>
            <label className={'login__label'} htmlFor="password">Пароль</label>
            <input className={'login__form__item'}
                   onChange={e => setPassword(e.target.value)}
                   value={password}
                   type="password"
                   placeholder="Пароль"
                   id="password"/>
            <div className={'login__buttons'}>
                <button className={'login__button'}
                        onClick={() => store.login(email, password)}>Войти
                </button>
                <button className={'login__button'}
                        onClick={() => store.registration(email, password)}>Зарегистрироваться
                </button>
            </div>
        </div>
    );
};


export default Login;