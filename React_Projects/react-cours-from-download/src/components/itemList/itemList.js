import React, { Component } from 'react';
import './itemList.css';
import Spinner from '../spinner';
export default class ItemList extends Component {
    state = {
        itemList: null
    }
    componentDidMount = () => {
        const { getItems } = this.props
        getItems()
            .then(itemList => {
                this.setState({
                    itemList
                })
            })
    }
    renderItems = (array) => {
        return array.map((e, n) => {
            const label = this.props.renderItem(e);
            return (
                <li
                    onClick={() => this.props.onItemSelected(n)}
                    key={n}
                    className="list-group-item">
                    {label}
                </li>
            )
        })
    }
    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spinner />
        }
        const items = this.renderItems(itemList);
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
ItemList.defaultProps = {
    onItemSelected: () => {
        console.log('hello')
    }
}