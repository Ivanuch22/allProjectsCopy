import React, { Component } from 'react';
import ItemList from '../itemList';
import ItemDetails, { Field } from '../itemDetails';
import ErrorMessage from '../errorMesage';
import RowBlock from '../rowBlock';
import getService from '../../data/getService';


export default class HouseListPage extends Component {
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
      selectedItem: id + 1
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
        getItems={this.getService.getAllHouses}
        onItemSelected={this.onItemSelected}

      />
    )
    const houseDetails = (
      <ItemDetails
        itemId={this.state.selectedItem}
        getItem={this.getService.getHouse}
      >
        <Field field='gender' label="Gender" />
        <Field field='born' label="Born" />
        <Field field='died' label="Died" />
        <Field field='culture' label="Culture" />
      </ItemDetails>
    )
    return (
      <RowBlock left={itemList} right={houseDetails} />
    )
  }
}