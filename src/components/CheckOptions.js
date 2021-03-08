import React, {useState} from 'react';

const CheckOptions = () => {
    let [checkDisplay, setCheckDisplay] = useState(false);

    const clickCheck = (e) => {
        e.preventDefault();
        setCheckDisplay(!checkDisplay);
    }

    if (checkDisplay)
    {
        return (
            <div className="check-options">
                <button className="check" onClick={ e => clickCheck(e)}>Sprawdź możliwości  <i className="fas fa-arrow-circle-down"></i></button>
            </div>
        );
    }
    else {
        return (
            <div className="check-options">
                <button className="check" onClick={clickCheck}>Sprawdź możliwości <i className="fas fa-arrow-circle-down"></i></button>
            </div>
        );
    }

};

export default CheckOptions;