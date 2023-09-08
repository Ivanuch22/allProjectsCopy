import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { CharListPage, BookListPage, BooksItem, HouseListPage } from '../pages';
import ErrorMessage from '../errorMesage';
import { Route, Routes, useParams } from 'react-router-dom';
import './index.css'
const BookId = () => {
    let { userId } = useParams();
    return <BooksItem bookId={userId} />
}

export default class App extends Component {
    state = {
        hide: false,
        error: false
    }
    componentDidCatch() {
        this.setState({
            error: true
        })
    }
    toogleRandomChar = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        const { hide, error } = this.state
        const randomChar = !hide ? <RandomChar interval={5000} /> : null;
        if (error) {
            return <ErrorMessage />
        }

        return (
            <div className='app'>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {randomChar}
                            <button onClick={this.toogleRandomChar}>Toggle  char</button>
                        </Col>
                    </Row>
                    <Routes>
                        <Route path='/' element={''} />
                        <Route path='/characters' element={<CharListPage />} />
                        <Route path='/books' exact element={<BookListPage />} />
                        <Route path='/houses' exact element={<HouseListPage />} />
                        <Route path="/books/:userId" element={<BookId />} />
                    </Routes>
                </Container>
            </div>
        )
    }
};
