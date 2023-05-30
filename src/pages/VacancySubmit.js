import React, {FC, useState} from 'react';
import "../styles/Vac.css";
import $api from "../http";

const VacancySubmit: FC = () => {
    const [department_id, setDepartment_id] = useState(1)
    const [name, setName] = useState('')
    const [experience, setExperience] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [min_salary, setMinSalary] = useState(0.0)
    const [max_salary, setMaxSalary] = useState(0.0)
    const [description, setDescription] = useState('')
    const vacancy = {
        department_id: department_id,
        name: name,
        experience: experience,
        city: city,
        address: address,
        min_salary: min_salary,
        max_salary: max_salary,
        description: description
    }

    return (<div className={"par"}>
        <div className={'vac__form__vacancy'}>
            <h1 className={'page__title'}>Новая вакансия</h1>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'dep_id'}>
                    Номер департамента
                </label>
                <input className={'vac__form__item'} id={'dep_id'}
                       onChange={e => setDepartment_id(e.target.value)}
                       value={department_id}
                       type="number"
                       placeholder="Номер Департамента"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_name'}>
                    Название
                </label>
                <input className={'vac__form__item'} id={'vac_name'}
                       onChange={e => setName(e.target.value)}
                       value={name}
                       type="text"
                       placeholder="Название"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_exp'}>
                    Опыт работы
                </label>
                <input className={'vac__form__item'} id={'vac_exp'}
                       onChange={e => setExperience(e.target.value)}
                       value={experience}
                       type="text"
                       placeholder="Опыт работы"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_city'}>
                    Город
                </label>
                <input className={'vac__form__item'} id={'vac_city'}
                       onChange={e => setCity(e.target.value)}
                       value={city}
                       type="text"
                       placeholder="Город"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_addr'}>
                    Адрес
                </label>
                <input className={'vac__form__item'} id={'vac_addr'}
                       onChange={e => setAddress(e.target.value)}
                       value={address}
                       type="text"
                       placeholder="Адрес"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_min_s'}>
                    Минимальная зарплата
                </label>
                <input className={'vac__form__item'} id={'vac_min_s'}
                       onChange={e => setMinSalary(e.target.value)}
                       value={min_salary}
                       type="number"
                       placeholder="Минимальная зарплата"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_max_s'}>
                    Максимальная зарплата
                </label>
                <input className={'vac__form__item'} id={'vac_max_s'}
                       onChange={e => setMaxSalary(e.target.value)}
                       value={max_salary}
                       type="number"
                       placeholder="Максимальная зарплата"/></div>
            <div className={'vac__pair'}>
                <label className={'vac__label'} htmlFor={'vac_desc'}>
                    Описание
                </label>
                <input className={'vac__form__item'} id={'vac_desc'}
                       onChange={e => setDescription(e.target.value)}
                       value={description}
                       type="text"
                       placeholder="Описание"/></div>
            <div className={'vac__buttons'}>
                <button className={'vac__button'}
                        onClick={() => $api.post('https://1532773-cx56354.twc1.net/api/v1/vacancy/', vacancy)}>Добавить
                </button>
            </div>

        </div>
    </div>);
};


export default VacancySubmit;