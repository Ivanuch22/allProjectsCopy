import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMesage';
import RowBlock from '../rowBlock';
import getService from '../../data/getService';

export default class BookListPage extends Component {
  getService = new getService();

  state = {
    selectedChar: null,
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }
  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    });
  };
  render() {
    const { error } = this.state;
    if (error) {
      return <ErrorMessage />;
    }
    const itemList = (
      <ItemList
        renderItem={(item) => item.gender ? `${item.name} (${item.gender})` : `${item.name}`}
        getItems={this.getService.getAllBooks}
        onItemSelected={this.onItemSelected} />
    );
    const bookDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getItem={this.getService.getBook}
      >
        <Field field='numberOfPage' label="NumberOfPage" />
        <Field field='publiser' label="Publiser" />
        <Field field='released' label="Released" />
      </ItemDetails>
    );
    return (
      <RowBlock left={itemList} right={bookDetails} />
    );
  }
}
