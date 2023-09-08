import React, { Component } from 'react';
import getService from '../../data/getService';
import ItemDetails, { Field } from '../itemDetails';


export default class BooksItem extends Component {
  getService = new getService();
  render() {
    return (
      <ItemDetails
        itemId={this.props.bookId}
        getItem={this.getService.getBook}>
        <Field field='numberOfPage' label="NumberOfPage" />
        <Field field='publisher' label="Publisher" />
        <Field field='released' label="Released" />
      </ItemDetails>
    )
  }
}