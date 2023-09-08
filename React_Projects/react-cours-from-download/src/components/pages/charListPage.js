import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMesage';
import RowBlock from '../rowBlock';
import getService from '../../data/getService';


export default class CharListPage extends Component {
    getService = new getService();

    state = {
        selectedChar: null,
        error: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    onItemSelected = (id) => {
        this.setState({
            selectedItem: id + 41
        })
    }
    render() {
        const { error } = this.state
        if (error) {
            return <ErrorMessage />
        }
        const itemList = (
            <ItemList
                renderItem={(item) => item.gender ? `${item.name} (${item.gender})` : `${item.name}`}
                getItems={this.getService.getAllCharacters}
                onItemSelected={this.onItemSelected} />
        )
        const charDetails = (
            <ItemDetails
                itemId={this.state.selectedItem}
                getItem={this.getService.getCharacter}
            >
                <Field field='gender' label="Gender" />
                <Field field='born' label="Born" />
                <Field field='died' label="Died" />
                <Field field='culture' label="Culture" />
            </ItemDetails>
        )
        return (
            <RowBlock left={itemList} right={charDetails} />
        )
    }
}