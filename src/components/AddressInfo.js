import React, {useState} from 'react';

const AddressInfo = () => {
    let [addressDisplay, setAddressDisplay] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();
        setAddressDisplay(!addressDisplay);
    }

    if (addressDisplay)
    {
        return (
            <div className="contact">
                <a href="#calculator" className="header__calculator" >kalkulator</a>
                <div className="contact__phone">
                <a href="#" className="header__contact" onClick={ e => clickHandler(e)}>kontakt</a>
                <address>
                    tel. 35 1000 100
                </address>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="contact">
                <a href="#calculator" className="header__calculator" >kalkulator</a>
                <a href="#" className="header__contact" onClick={clickHandler}>kontakt</a>
            </div>
        );
    }

};

export default AddressInfo;