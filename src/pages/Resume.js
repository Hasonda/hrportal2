import React, {useEffect, useState} from 'react';
import '../styles/Resume.css';
import $api from "../http";

const Resume = () => {
    useEffect(() => {
        fetchResumeData()
    }, [])

    async function fetchResumeData() {
        const response = await $api.get('http://1532773-cx56354.twc1.net/api/v1/summary/')
        setCitizenship(response.data.citizenship)
        setSkills(response.data.skills)
        setExperience(response.data.experience)
        setReady_to_move(Boolean(response.data.ready_to_move))
        setCar_license(Boolean(response.data.car_license))
        setOnly_remote(Boolean(response.data.only_remote))
        setReady_for_trips(Boolean(response.data.ready_for_trips))
        setEducation(response.data.education)
        setPref_position(response.data.pref_position)
        setPref_salary(response.data.pref_salary)
        setPref_city(response.data.pref_city)
        setBusyness(response.data.busyness)
    }

    async function putResume(res) {
        await $api.put('/summary/',res)
    }

    const handleMove = () => {
        setReady_to_move(!ready_to_move)
    }
    const handleCar = () => {
        setCar_license(!car_license)
    }
    const handleRemote = () => {
        setOnly_remote(!only_remote)
    }
    const handleTrips = () => {
        setReady_for_trips(!ready_for_trips)
    }

    const [citizenship, setCitizenship] = useState('')
    const [skills, setSkills] = useState('')
    const [experience, setExperience] = useState('')

    const [ready_to_move, setReady_to_move] = useState(false)
    const [car_license, setCar_license] = useState(false)
    const [only_remote, setOnly_remote] = useState(false)
    const [ready_for_trips, setReady_for_trips] = useState(false)

    const [education, setEducation] = useState('')
    const [pref_position, setPref_position] = useState('')
    const [pref_salary, setPref_salary] = useState(0.0)
    const [pref_city, setPref_city] = useState('')
    const [busyness, setBusyness] = useState('')
    const resume = {
        citizenship: citizenship,
        skills: skills,
        experience: experience,
        ready_to_move: ready_to_move,
        car_license: car_license,
        only_remote: only_remote,
        ready_for_trips: ready_for_trips,
        education: education,
        pref_position: pref_position,
        pref_salary: pref_salary,
        pref_city: pref_city,
        busyness: busyness,
    }

    return (
        <div>
            <h1 className={'page__title'}>Основная информация</h1>
            <div className={'resume'}>
                <div className={'resume__photo'}>
                    <img className={'resume__img'} src={'cat.jpg'} alt={'123'}/>
                </div>
                <form className={'resume__form'}>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'citizenship'}>Гражданство</label>
                        <input className={'resume__form__item'} type="text" placeholder="Гражданство"
                               id='citizenship' value={citizenship}
                               onChange={e => setCitizenship(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'skills'}>Навыки</label>
                        <input className={'resume__form__item'} type="text" placeholder="Ваши навыки"
                               id='skills' value={skills}
                               onChange={e => setSkills(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'experience'}>Опыт работы</label>
                        <input className={'resume__form__item'} type="text" placeholder="Ваш стаж работы"
                               id='experience' value={experience}
                               onChange={e => setExperience(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'ready_to_move'}>Возможность переезда</label>
                        <input className={'resume__form__item_ch'} type="checkbox"
                               placeholder="Есть ли у вас возможность переезда?"
                               id='ready_to_move' checked={ready_to_move}
                               onChange={handleMove}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'car_license'}>Наличие водительских прав</label>
                        <input className={'resume__form__item_ch'} type="checkbox"
                               placeholder="Наличие водительских прав"
                               id='car_license' checked={car_license}
                               onChange={handleCar}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'only_remote'}>Только удаленно</label>
                        <input className={'resume__form__item_ch'} type="checkbox"
                               placeholder="Только удаленно"
                               id='only_remote' checked={only_remote}
                               onChange={handleRemote}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'ready_for_trips'}>Возможность командировок</label>
                        <input className={'resume__form__item_ch'} type="checkbox"
                               placeholder="Возможность командировок"
                               id='ready_for_trips' checked={ready_for_trips}
                               onChange={handleTrips}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'education'}>Образование</label>
                        <input className={'resume__form__item'} type="text" placeholder="Образование"
                               id='education' value={education}
                               onChange={e => setEducation(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'pref_salary'}>Желаемая зарплата</label>
                        <input className={'resume__form__item'} type="text" placeholder="Желаемая зарплата"
                               id='pref_salary' value={pref_salary}
                               onChange={e => setPref_salary(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'pref_city'}>Предпочитаемый город работы</label>
                        <input className={'resume__form__item'} type="text" placeholder="Предпочитаемый город работы"
                               id='pref_city' value={pref_city}
                               onChange={e => setPref_city(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'pref_position'}>Желаемая должность</label>
                        <input className={'resume__form__item'} type="text" placeholder="Желаемая должность"
                               id='pref_position' value={pref_position}
                               onChange={e => setPref_position(e.target.value)}/>
                    </div>
                    <div className={'resume__pair'}>
                        <label className={'resume__label'} htmlFor={'busyness'}>Желаемый рабочий график</label>
                        <input className={'resume__form__item'} type="text" placeholder="Желаемый рабочий график"
                               id='busyness' value={busyness}
                               onChange={e => setBusyness(e.target.value)}/>
                    </div>
                    <div className={'resume__group__buttons'}>
                        <button className={'resume__form__button'}
                                onClick={() => putResume(resume)}
                        >Сохранить
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};
export default Resume;