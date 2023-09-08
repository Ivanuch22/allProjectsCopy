import React, { Component } from 'react';
import './style.css';
import ErrorMessage from '../errorMesage';
const Field = ({ item, field, label }) => {
    let Field = '';
    if (item[field] !== undefined && item[field] !== '') {
        Field = item[field]
    } else {
        Field = "'not fount'"
    }
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{Field}</span>
        </li>
    )
}
export {
    Field
}
export default class ItemDetails extends Component {
    state = {
        item: null,
        error: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    componentDidMount() {
        this.updateItem();
    }
    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem = () => {
        const { itemId, getItem } = this.props;
        if (!itemId) {
            return;
        }
        getItem(itemId)
            .then((item) => {
                this.setState({ item })
            })
    }


    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
        if (!this.state.item) {
            return <span className='select-error'>Please select character</span>;
        };

        const { name } = this.state.item;
        const { item } = this.state;

        return (
            <div className="char-details rounded" >
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div >
        );
    }
}