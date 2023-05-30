import React, {useEffect, useState} from 'react';
import '../styles/Home.css'
import VacancyListItem from "../components/VacancyListItem";
import axios from "axios";
import MySelect from "../components/MySelect";


const Home = () => {
    const [vacancies, setVacancies] = useState([])
    const [vac2, setVac2] = useState([])
    useEffect(() => {
        fetchVacancies()
    }, [])

    async function fetchVacancies() {
        const response = await axios.get('https://1532773-cx56354.twc1.net/api/v1/vacancy/?limit=15')
        setVacancies(response.data)
        setVac2(response.data)
    }

    const [selectedSort, setSelectedSort] = useState('')

    const sortVacancies = (sort) => {
        setSelectedSort(sort);
        setVacancies([...vacancies].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    const sortVacanciesCity = (code) => {
        const cities = {'0': 'Все города ', '1': 'Екатеринбург', '2': 'Москва', '3': 'Казань'}
        setVacancies(vac2.filter(a => code === '0'
            ? a
            : a.city === cities[code]))
    }

    const sortSalary = (code) => {
        const salary = {
            '0': 0,
            '1': 10000,
            '2': 50000,
            '3': 100000,
            '4': 250000
        }
        setVacancies(vac2.filter(a => code === '0'
            ? a
            : a.min_salary >= salary[code]))
    }


    return (
        <div className={'vacancy__desk'}>
            <h1 className={'page__title'}>Доска Вакансий</h1>

            <div className={'vacancies'}>
                <div className={'vacancies__filters'}>
                    <h2 className={'filter__vacancies_title'}>Фильтр вакансий</h2>
                    <div>Фильтры по наполнению</div>
                    <MySelect value={selectedSort}
                              onChange={sortVacancies}
                              defaultValue="Сортировка"
                              options={[
                                  {value: 'name', name: 'По названию'},
                                  {value: 'description', name: 'По описанию'}
                              ]}
                    />
                    <div>Сортировка по городу</div>
                    <MySelect
                        value={selectedSort}
                        onChange={sortVacanciesCity}
                        defaultValue="Город"
                        options={[
                            {value: '0', name: 'Все города'},
                            {value: '1', name: 'Екатеринбург'},
                            {value: '2', name: 'Москва'},
                            {value: '3', name: 'Казань'},
                        ]}
                    />
                    <div>Сортировка по зарплате</div>
                    <MySelect
                        value={selectedSort}
                        onChange={sortSalary}
                        defaultValue="Зарплата"
                        options={[
                            {value: '0', name: '0'},
                            {value: '1', name: '10000'},
                            {value: '2', name: '50000'},
                            {value: '3', name: '100000'},
                            {value: '4', name: '250000'},
                        ]}
                    />
                </div>
                <div className={'vacancy__list'}>
                    {vacancies.map(vac => <VacancyListItem props={vac}/>)}
                </div>
            </div>
        </div>
    );
};

export default Home;