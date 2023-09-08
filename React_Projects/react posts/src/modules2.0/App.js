import React, { Component } from 'react';



export default class App extends Component {
    constructor(props) {
        super(props)
        this._apiBase = `https://www.anapioficeandfire.com/api`
    }
    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
        };
        const some = await res.json();
        return some;
    }
    getAllCharacters = () => {
        this.getResourse(`/characters?page=7&pageSize=10`)
            .then(data => data.forEach(element => console.log(element.name)))
    }
    getCharacter = (id) => {
        this.getResourse(`/characters/${id}`)
            .then(data => console.log(data))

    }

    render() {
        this.getAllCharacters()
        this.getCharacter(50)
        return <h1> Hello world </h1 >
    }
}