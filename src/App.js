import logo from './logo.svg';
import './App.css';
import './scss/main.scss'

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import i1 from './images/i1.jpg'
import i2 from './images/i2.jpg'
import i3 from './images/i3.jpg'
import i4 from './images/i4.jpg'
import React from "react";

function App() {
    return (
        <div className="App">
            <header className="header">
                <a href="#" className="header__contact">kontakt</a>
                <a href="#" className="logo">O KURKA WODNA</a>
                <div className="form__icons">
                    <a href="#"><i className="fab fa-facebook-square fa-2x"></i></a>
                    <a href="#"><i className="fab fa-twitter-square fa-2x"></i></a>
                </div>
            </header>
            <main>
                <h2 className="main__description">Ogród to magiczne miejsce, które w sposób szczególny ozdobia cały nasz
                    dom. Ogród to najbliższe nam środowisko
                    naturalne, w którym spędzamy miło czas.
                    Czy można połączyć dbanie o środowisko naturalne z oszczędnościami dla naszych kieszeni. Oczywiście
                    - oszczędzając wodę. Nasza firma proponuje
                    Państwu zbiorniki na deszczówkę umożliwiające magazynowanie wody deszczowej w celu jej ponownego
                    wykorzystania. Nie daj wodzie spłynąć! </h2>
                <div className="slider">
                    <AliceCarousel autoPlay autoPlayInterval="2000">
                        <img src={image1} className="sliderimg" alt="picture"/>
                        <img src={image2} className="sliderimg" alt="picture"/>
                        <img src={image3} className="sliderimg" alt="picture"/>
                        <img src={image4} className="sliderimg" alt="picture"/>
                    </AliceCarousel>
                </div>
                <h3>WODA I JEJ ZNACZENIE</h3>
                <div className="water-usage__images">
                    <img src={i1} className="image" alt="image"/>
                    <img src={i2} className="image" alt="image"/>
                    <img src={i3} className="image" alt="image"/>
                    <img src={i4} className="image" alt="image"/>
                </div>

            </main>
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </div>
    );
}

export default App;
