import React from "react";
// import "./app-header.css"
import style from 'styled-components';
//Створення компонента header зі своїми стилями 
const Header = style.header`
    display: flex;
    align-items    : flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        //перевірка пропса, якщо він є то колір orange, якщо ні то black
        color: ${props => props.colorred ? 'orange' : 'black'};
        :hover{ 
          color: blue;
        }
      };
    h2 {
      font-size: 1.2rem;
      color    : grey;
    }

`
const AppHeaer = ({ liked, allPosts }) => {
  return (
    //
    <Header colorred>
      <h1>Ivan Kalunuch</h1>
      <h2>{allPosts} записів, з них сподобались {liked}</h2>
    </Header>
  )
}
export default AppHeaer