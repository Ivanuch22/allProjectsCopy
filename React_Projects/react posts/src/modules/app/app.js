import React, { Component } from "react";
import AppHeaer from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import style from 'styled-components';

//створення модуля div з вланими стилями, які записуються тут у js а не y css, scss
const MainBlock = style.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                { label: ' Going to react', important: true, like: false, id: 1 },
                { label: ' That is so good', important: false, like: false, id: 2 },
                { label: ' I need a break...', important: false, like: false, id: 3 }
            ],
            term: '',
            filter: 'all',
        }
        this.maxId = 4
    }
    //видалення елемента
    deleteItem = (id) => {
        //change state value after this, page rerendering 
        this.setState(({ data }) => {
            let index = data.findIndex(element => element.id === id)
            const before = data.slice(0, index);
            const after = data.slice(index + 1);
            const newArr = [...before, ...after];
            return { data: newArr }

        })
    }

    toggleImportant = (id) => {
        this.setState(({ data }) => {
            //індекс елемента, де відбувається event
            const index = data.findIndex(element => element.id === id)
            //обєкт з цим елементом
            const old = data[index];
            //добавленя в обєкт з event important
            const newItem = { ...old, important: !old.important };
            // створення нового масиву для відмальовки з нього важливого елемента
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            //відтворення змін 
            return {
                data: newArr
            }
        })
    }
    toggleLike = (id) => {
        //тоже саме що й вище
        this.setState(({ data }) => {
            const index = data.findIndex(element => element.id === id)
            const old = data[index];
            const newItem = { ...old, like: !old.like };
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
            return {
                data: newArr
            }
        })
    }

    //добавлення нового елемента
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })

    }
    searchPost = (items, text) => {
        if (text.length === 0) {
            return items
        }
        return items.filter((item) => {
            return item.label.indexOf(text) > -1
        })
    }
    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }
    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }
    onFilterSelect = (filter) => {
        this.setState({ filter: filter })
    }
    render() {
        //витягнення з пропсів в константу масива
        const { data, term, filter } = this.state
        // фільтрування масива, запис константи в якій міститься кількість лайкнутих елементів 
        const liked = data.filter(item => item.like).length;
        //запис в константу кількості постів
        const allPosts = data.length
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)
        return (
            <MainBlock>
                <AppHeaer
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className=" search-panel d-flex">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect} />
                </div>
                <PostList
                    posts={visiblePosts}
                    Delete={this.deleteItem}
                    toggleImportant={this.toggleImportant}
                    toggleLike={this.toggleLike}
                />
                <PostAddForm
                    addPost={this.addItem}
                />
            </MainBlock>
        )
    }
}
