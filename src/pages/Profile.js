import React, {useEffect, useState} from 'react';
import '../styles/Profile.css';
import $api from "../http";

const Profile = () => {
    const [name, setName] = useState('')
    const [family_name, setFamily_name] = useState('')
    const [last_name, setLast_name] = useState('')
    const [age, setAge] = useState(0.0)
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    async function fetchProfileData() {
        const response = await $api.get('/profile/')
        setName(response.data.name)
        setFamily_name(response.data.family_name)
        setLast_name(response.data.last_name)
        setAge(response.data.age)
        setEmail(response.data.email)
        setPhone(response.data.phone)

    }

    useEffect(() => {
        fetchProfileData()
    }, [])

    async function putProfile(res) {
        await $api.put('/profile/', res)
    }

    const profile = {
        name: name,
        family_name: family_name,
        last_name: last_name,
        age: age,
        email: email,
        phone: phone,
    }

    return (
        <div>
            <h1 className={'page__title'}>Профиль</h1>
            <div className={'profile'}>
                <div className={'profile__photo'}>
                    <img className={'profile__jpg'} src={'cat.jpg'} alt={'123'}/>
                </div>
                <form className={'profile__form'}>

                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'name1'}>Имя</label>
                        <input className={'profile__form__item'} type="text" placeholder="Имя" id='name1'
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                    </div>
                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'name2'}>Фамилия</label>
                        <input className={'profile__form__item'} type="text" placeholder="Фамилия" id='name2'
                               value={family_name}
                               onChange={e => setFamily_name(e.target.value)}/>
                    </div>
                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'name3'}>Отчество</label>
                        <input className={'profile__form__item'} type="text" placeholder="Отчество" id='name3'
                               value={last_name}
                               onChange={e => setLast_name(e.target.value)}/>
                    </div>
                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'age'}>Возраст</label>
                        <input className={'profile__form__item'} type="text" placeholder="Возраст" id='age'
                               value={age}
                               onChange={e => setAge(e.target.value)}/>
                    </div>
                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'email'}>Почта</label>
                        <input className={'profile__form__item'} type="text" placeholder="Почта" id='email'
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className={'profile__pair'}>
                        <label className={'profile__label'} htmlFor={'phone'}>Телефон</label>
                        <input className={'profile__form__item'} type="text" placeholder="Телефон" id='phone'
                               value={phone}
                               onChange={e => setPhone(e.target.value)}/>
                    </div>
                    <div className={'profile__group__buttons'}>
                        <button className={'profile__form__button'}
                                onClick={() => putProfile(profile)}>
                            Сохранить
                        </button>
                    </div>


                </form>
            </div>
        </div>
    );
};

export default Profile;