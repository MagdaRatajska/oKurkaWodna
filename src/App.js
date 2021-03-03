import logo from './logo.svg';
import './App.css';
import './scss/main.scss'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from 'images/image1.jpg';
import image2 from 'images/image2.jpg';
import image3 from 'images/image3.jpg';
import image4 from 'images/image4.jpg';
function App() {
  return (

    <div className="App">
        <header className="header">
            <a href="#">kontakt</a>
            <h1>O KURKA WODNA</h1>
            <div className="form__icons">
                <a href="#"><i className="fab fa-facebook-square fa-2x"></i></a>
                <a href="#"><i className="fab fa-twitter-square fa-2x"></i></a>
            </div>
        </header>
<main>
    <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={image1} className="sliderimg"/>
            <img src={image2} className="sliderimg"/>
            <img src={image3} className="sliderimg"/>
            <img src={image4} className="sliderimg"/>
        </AliceCarousel>
    </div>
</main>
        <img src={logo} className="App-logo" alt="logo" />
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
