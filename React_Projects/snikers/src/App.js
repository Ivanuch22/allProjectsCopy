import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import { Routes, Route } from 'react-router-dom';

import Card from './component/Card';
import Main from './pages/main';
import LikedPage from './pages/liked';

function App() {
  const [items, setItems] = useState([]);
  const [addedCarts, setAddedCarts] = useState([]);
  const [likedCarts, setLikedCarts] = useState([]);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [input, setInput] = useState("");
  const [searchedCards, setSearchedCards] = useState([]);


  useEffect(() => {
    axios.get("https://630a790132499100328636f0.mockapi.io/items")
      .then((res) => {
        setItems(res.data)
        return res.data
      })
      .then((cards) => {
        axios.get("https://630a790132499100328636f0.mockapi.io/addedCards")
          .then((res) => {

            setAddedCarts(res.data)
            return res.data

          })
          .then(res => {
            const newItemss = JSON.parse(JSON.stringify(cards));

            newItemss.forEach((card, index) => {
              res.forEach((cart) => {
                if (+card.id === +cart.id) {
                  newItemss[index].isAdded = true;
                }
              });
            });
            setItems(newItemss)

          })
      })
  }, []);

  const changeDrawerStatus = () => {
    setDrawerOpen(!isDrawerOpen)
    isDrawerOpen ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden ";
  }

  const onClick = (nameButton, card) => {
    const newCard = JSON.parse(JSON.stringify(card));
    const newItems = JSON.parse(JSON.stringify(items));
    const newAddedCarts = JSON.parse(JSON.stringify(addedCarts));
    const indexOfCard = items.findIndex(cart => cart.id === newCard.id);

    if (nameButton === "like") {
      newCard.isLike = !newCard.isLike;
      newItems[indexOfCard] = newCard;
      const newLikedCarts = newItems.filter(element => element.isLike);
      setLikedCarts(newLikedCarts)
      setItems(newItems);


    } else if (nameButton === "add") {

      newCard.isAdded = !newCard.isAdded;

      if (newCard.isAdded) {
        newAddedCarts.push(newCard);
        newItems[indexOfCard] = newCard;
        setItems(newItems);
        setAddedCarts(newAddedCarts)
        axios.post('https://630a790132499100328636f0.mockapi.io/addedCards', newCard)

      } else {
        const indexOfDeletedCard = newAddedCarts.findIndex(cart => cart.name === newCard.name);
        newItems[indexOfCard] = newCard;
        newAddedCarts.splice(indexOfDeletedCard, 1);

        setItems(newItems);
        setAddedCarts(newAddedCarts)

        axios.get("https://630a790132499100328636f0.mockapi.io/addedCards")
          .then(res => {
            const indexOfDeletedCard = res.data.findIndex(cart => cart.name === newCard.name);
            axios.delete(`https://630a790132499100328636f0.mockapi.io/addedCards/${res.data[indexOfDeletedCard].element}`)
            return newAddedCarts;
          })
      }
    }
  }
  const priceAddedCards = () => {
    const sumAddedCards = addedCarts.map(element => +element.price.replaceAll(' ', '')).reduce((accumulation, currentValue) => accumulation + currentValue, 0)
    return addedCarts.length ? sumAddedCards : 0;
  }

  const renderCards = (cards) => {
    return cards.map((card, index) => {
      return <Card obj={card} key={index} index={index} onClick={(nameButton, card) => onClick(nameButton, card)} />
    });
  }

  const showCartSearched = (event) => {
    const newCardsList = items.filter(element => element.name.toLowerCase().includes(event.target.value.toLowerCase()));
    setInput(event.target.value);
    setSearchedCards(newCardsList);
  }

  return (
    <Routes>
      <Route path="/" element={<Main items={items} isDrawerOpen={isDrawerOpen} priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} addedCarts={addedCarts} input={input} showCartSearched={showCartSearched} searchedCards={searchedCards} renderCards={(items) => renderCards(items)} onClick={(nameButton, card) => onClick(nameButton, card)} />}></Route>
      <Route path="/liked" element={<LikedPage items={likedCarts} isDrawerOpen={isDrawerOpen} priceAddedCards={priceAddedCards} changeDrawerStatus={changeDrawerStatus} addedCarts={addedCarts} input={input} showCartSearched={showCartSearched} searchedCards={searchedCards} renderCards={(addedCarts) => renderCards(addedCarts)} onClick={(nameButton, card) => onClick(nameButton, card)} />}></Route>
    </Routes >
  );
}

export default App;
