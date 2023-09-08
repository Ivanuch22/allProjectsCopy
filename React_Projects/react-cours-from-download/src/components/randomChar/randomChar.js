//підгрузка усіх необхідних файлів, компонентів
import React, { Component } from 'react';
import './randomChar.css';
import getService from '../../data/getService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMesage';

export default class RandomChar extends Component {
    // інніціалізація нового обєкту з отриманими данними з беку 
    getService = new getService();
    state = {
        char: {},
        loading: true,
        error: false
    }

    //функції житєвого циклу 
    componentDidMount = () => {
        this.updateChare()
        this.timeId = setInterval(this.updateChare, this.props.interval)
    }
    componentWillUnmount = () => {
        clearInterval(this.timeId)
    }
    // функція запису в state персонажа 
    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false
        })
    }
    // функція запису в state помилки 
    onError = () => {
        this.setState({
            error: true,
            loading: false
        })
    }
    // отримання рандомного персонажа 
    updateChare = () => {
        // рандомне число від 25 до 100
        let id = Math.floor(Math.random() * 150 + 55);
        // сам певний персонаж 
        return this.getService.getCharacter(id)
            // обновлення state для ререндерингу
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        // витягування в константи данних зі state 
        const { char, loading, error } = this.state;

        // якщо іде загрузка, прогрузка то появляється спінер, якщо ні то ніц
        const spinner = loading ? <Spinner /> : null
        // якщо є помилка, зявляється повідомлення про помилку 
        const errorMessage = error ? <ErrorMessage /> : null;
        // якщо нема помилки або загрузки, то зявляється верстка з потрібними данними
        const content = !(loading || error) ? <Vuew char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}
RandomChar.propsTypes = {
    interval: (props, propsName, componentName) => {
        const value = props[propsName]
        if (typeof value === 'number' && !isNaN(value)) {
            return null
        }
        return new TypeError(`${componentName}: ${propsName} must be a number`)
    }
}

// функція рендерингу html з данними рандомного персонажа
const Vuew = ({ char }) => {
    // витягування в константи данних зі пропсів 
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}