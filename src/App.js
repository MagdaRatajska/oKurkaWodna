import './App.css';
import './scss/main.scss'
import React from "react";
import AddressInfo from "./components/AddressInfo";


import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'

import WaterUsageInfo from "./components/WaterUsageInfo";
import Contact from "./components/Contact";
import MultiplyNumbers from "./components/MultiplyNumbers";


function App() {
    return (
        <div className="App">
            <header className="header">
                <AddressInfo/>
                <a href="#" className="logo">O KURKA WODNA</a>
                <div>
                    <p>Koszyk</p>
                    <a href="#" className="basket"><i className="fas fa-shopping-basket"></i></a>
                </div>
            </header>
            <main>
                <h2 className="main__description"> Susza. Myśląc o suszy przed wyobrażamy sobie najczęściej obrazki jak
                    z pustynii.
                    Tymczasem proces suszy hydrologicznej postępuje stopniowo w Polsce.
                    Czy wiesz, że zgodnie z danymi IMGW, rok 2020 dla Polski
                    był rokiem z jedną z największych susz hydrologicznych w Polsce? Za coraz trudniej dostępną wodą idą
                    też podwyżki jej cen.
                    Jak można oszczędzić pieniądze i zadbać o środowisko naturalne? Nasza firma proponuje
                    Państwu zbiorniki na deszczówkę umożliwiające magazynowanie wody deszczowej w celu jej ponownego
                    wykorzystania. Nie daj wodzie spłynąć! </h2>

                <div className="slider">
                    <AliceCarousel autoPlay autoPlayInterval="2000">
                        <img src={image4} className="sliderimg" alt="picture"/>
                        <img src={image2} className="sliderimg" alt="picture"/>
                        <img src={image3} className="sliderimg" alt="picture"/>
                        <img src={image1} className="sliderimg" alt="picture"/>
                    </AliceCarousel>
                </div>
                <h3>ILE M<sup>3</sup> WODY ZUŻYWASZ W CIĄGU ROKU</h3>
                <WaterUsageInfo/>
            </main>
            <MultiplyNumbers/>
            <form>
                <h4>Zostaw swoje dane kontaktowe - a nasz przedstawiciel skontaktuje się z Tobą</h4>
                <Contact/>
            </form>
            <footer>
                <p>&copy; Wszelkie prawa zastrzeżone</p>
                <div className="form__icons">
                    <a href="#"><i className="fab fa-facebook-square fa-2x"></i></a>
                    <a href="#"><i className="fab fa-twitter-square fa-2x"></i></a>
                </div>
            </footer>


        </div>
    );
}

export default App;
