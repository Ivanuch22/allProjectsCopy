import { Component } from 'react';

export default class GetService extends Component {
    constructor(props) {
        super(props)
        //запис в константу початкової силки
        this._apiBase = `https://www.anapioficeandfire.com/api`
    }
    // отримання данних з api в переформатування їх з json в обєкт 
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        };
        const some = await res.json();
        return some;
    }
    // отримання списка персонажів 
    getAllCharacters = async () => {
        const res = await this.getResource(`/characters?page=5&pageSize=10`)
        return res.map(this._transformCharacter);
    }
    // отримання одного персонажа
    getCharacter = async (id) => {
        const res = await this.getResource(`/characters/${id}`)
        return this._transformCharacter(res)
    }
    // отримання списка домів
    getAllHouses = async () => {
        const res = await this.getResource(`/houses/`)
        return res.map(this._transformHouse);
    }
    // отримання одного дому 
    getHouse = async (id) => {
        const res = await this.getResource(`/houses/${id}`)
        return this._transformHouse(res)
    }
    // отримання списка книг
    getAllBooks = async () => {
        const res = await this.getResource(`/books/`)
        return res.map(this._transformBook)
    }
    // отримання одної книги 
    getBook = async (id) => {
        const res = await this.getResource(`/books/${id}`)
        return this._transformBook(res)
    }
    _transformCharacter(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
    _transformHouse(house) {
        return {
            name: house.name,
            region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
            ancestralWeapons: house.ancestralWeapons
        }
    }
    _transformBook(book) {
        return {
            name: book.name,
            numberOfPage: book.numberOfPage,
            publiser: book.publiser,
            released: book.released
        }
    }
}