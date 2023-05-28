import React, {useState} from 'react';

const VacancyListItem = (props) => {
    const [click, setClick] = useState(false);
    const isClicked = () => {
        setClick(!click);
    };
    return (<div className={'vacancy__list__item'}>
            <p className={'vacancy__item__name'}>{props.props.id}. {props.props.name}</p>
            <p className={'vacancy__item__salary'}>{props.props.min_salary}-{props.props.max_salary} руб. </p>
            <p className={'vacancy__item__desc'}>{props.props.description}</p>
            <p className={'vacancy__item__dep_name'}>Адрес: {props.props.city}, {props.props.address}</p>
            <button className={'vacancy__item__response__btn'}
                    onClick={isClicked}>{click ? "Резюме отправлено" : "Откликнуться"}</button>
        </div>);
};

export default VacancyListItem;