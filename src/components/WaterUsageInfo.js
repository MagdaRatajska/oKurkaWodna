import React, {useState} from 'react';
import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";
import i3 from "../images/i3.jpg";
import i4 from "../images/i4.jpg";

const WaterUsageInfo = () => {
    let[pictureInfo, setPictureInfo] = useState(false);
    const clickHandler = (e) => {
        e.preventDefault();
        setPictureInfo(!pictureInfo);
    }
    if (pictureInfo) {
        return (
            <div className="water-usage__images">
                <img src={i1} className="image__left" id="i1" alt="image" onClick={e => clickHandler(e)}/>
                <p>5000m<sup>3</sup></p>
                <img src={i2} className="image" id="i2" alt="image" onClick={e => clickHandler(e)}/><p>1200m<sup>3</sup>
            </p>
                <img src={i3} className="image__left" id="i3" alt="image" onClick={e => clickHandler(e)}/>
                <p>3900m<sup>3</sup></p>
                <img src={i4} className="image" id="i4" alt="image" onClick={e => clickHandler(e)}/><p>8600m<sup>3</sup>
            </p>
            </div>
        );
    }
    else {
        return(
            <div className="water-usage__images">
                <img src={i1} className="image__left" id="i1" alt="image" onClick={e => clickHandler(e)}/>
                <img src={i2} className="image" id="i2" alt="image" onClick={e => clickHandler(e)}/>
                <img src={i3} className="image__left" id="i3" alt="image" onClick={e => clickHandler(e)}/>
                <img src={i4} className="image" id="i4" alt="image" onClick={e => clickHandler(e)}/>
            </div>
        );
    }
};

export default WaterUsageInfo;