import React, {useContext} from 'react';
import '../../styles/Navbar.css';
import {Link} from "react-router-dom";
import {Context} from "../../index";

const Navbar = ({isAuth}) => {
    const {store} = useContext(Context)
    return (
        <div className={'navbar'}>
            <div className={'navbar__title'}>HR портал</div>
            <Link className={'navbar__item'} to={'/'}>Главная</Link>

            {isAuth
                ? (<div>
                    <Link className={'navbar__item'} to={'/profile'}>Личный кабинет</Link>
                    <Link className={'navbar__item'} to={'/resume'}>Ваше Резюме</Link>
                    <Link className={'navbar__item'} to={'/vacancysubmit'}>Добавить вакансию</Link>
                    <Link className={'navbar__item'} to={'/login'} onClick={() => store.logout()}>Выйти</Link>
                </div>)
                : (<Link className={'navbar__item'} to={'/login'}>Вход</Link>)
            }
        </div>
    );
};

export default Navbar;




