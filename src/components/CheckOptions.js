import React, {useState} from 'react';
import z1 from "../images/z1.jpg";
import z2 from "../images/z2.jpg";

const CheckOptions = ({score, scoreSetter}) => {
    let [checkDisplay, setCheckDisplay] = useState(false);

    const clickCheck = (e) => {
        e.preventDefault();
        scoreSetter();
        setCheckDisplay(!checkDisplay);
    }
    let less1500 =  (<div className="less__than-1500">
                    <img src={z1} className="check__image" alt="picture"/>
                    <div className="container__option">
                        <h3 className="option__title">Zbiornik na deszczówkę 1500l</h3>
                        <p className="option__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Ab accusantium at earum esse est excepturi impedit inventore ipsam libero nobis numquam
                            officia perferendis possimus provident quae, rem repellendus rerum vero.</p>
                        <div className="price__btn-option">
                            <p className="price__option">Cena: <b>500zł</b></p>
                            <button className="btn__option">do koszyczka</button>
                        </div>
                    </div>
                </div>);

    let more1500 = ( <div className="less__than-5000">
        <img src={z2} className="check__image" alt="picture"/>
        <div className="container__option">
            <h3 className="option__title">Zbiornik na deszczówkę 5000l</h3>
            <p className="option__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ab accusantium at earum esse est excepturi impedit inventore ipsam libero nobis numquam
                officia perferendis possimus provident quae, rem repellendus rerum vero.</p>
            <div className="price__btn-option">
                <p className="price__option">Cena: <b>1500zł</b></p>
                <button className="btn__option">do koszyczka</button>
            </div>
        </div>
    </div>)

    if (checkDisplay) {
        return (
            <>
                <div className="check__options">
                    <button className="btn__check" onClick={e => clickCheck(e)}>Sprawdź możliwości <i
                        className="fas fa-arrow-circle-down"></i></button>
                </div>
                <div className="container">
                    <h3 className="container__title">Najlepsza opcja dla Ciebie:</h3>
                    {score>=1500 ? more1500 : less1500}
                </div>
            </>
        );
    } else {
        return (
            <div className="check__options">
                <button className="btn__check" onClick={e => clickCheck(e)}>Sprawdź możliwości <i
                    className="fas fa-arrow-circle-down"></i></button>
            </div>
        );
    }

};

export default CheckOptions;