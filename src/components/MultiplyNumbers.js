import React, {Component} from "react";
import CheckOptions from "./CheckOptions";
import image5 from "../images/image5.jpg";

class MultiplyNumbers extends Component {
    state = {
        roofDimensionA: 0,
        roofDimensionB: 0,
        typeOfRoof: 0,
        region: 0,
        score: 0
    }

    nanChecker = () => {
        if (!isNaN(this.state.roofDimensionA) && !isNaN(this.state.roofDimensionB) && !isNaN(this.state.typeOfRoof) && !isNaN(this.state.region)) {
            this.setState({
                score: parseInt(this.state.roofDimensionA) * parseInt(this.state.roofDimensionB) * parseFloat(this.state.typeOfRoof) * parseInt(this.state.region)
            })
        }
            else {
            this.setState({score:"Wprowadź wymiary dachu. Wybierz wojewódźtwo i rodzaj dachu"});
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: (e.target.value)
        }, this.nanChecker)

    }

    handleChange(event) {
        this.setState({value: event.target.value}, this.nanChecker);
    }


    render() {
        return (
            <>
                <div className="multiply-numbers__main">
                <form className="multiply-numbers__form">
                    <h3 className="multiply__description" id="calculator">Kalkulator ilości wody, która spływa z Twojego dachu w ciągu roku: </h3>
                    <label>
                        Wprowadź pierwszy wymiar dachu w metrach A:
                    </label>
                    <input
                        type="number"
                        name="roofDimensionA"
                        value={this.state.roofDimensionA}
                        onChange={e => this.inputHandler(e)}
                    />
                    <br/>
                    <label>
                        Wprowadź drugi wymiar dachu w metrach B:
                    </label>
                    <input
                        type="number"
                        name="roofDimensionB"
                        value={this.state.roofDimensionB}
                        onChange={e => this.inputHandler(e)}
                    />
                    <br/>
                    <label>
                        Wybierz rodzaj dachu, dla którego obliczasz:
                    </label>
                        <select name="typeOfRoof" value={this.state.typeOfRoof} onChange={e => this.inputHandler(e)}>
                            <option value="0.2">papa bitumiczna</option>
                            <option value="0.2">skosny z dachówską</option>
                            <option value="0.3">skosny z blachą</option>
                            <option value="0.1">dach płaski</option>
                        </select>
                    <br/>
                    <label>
                        Wybierz województwo, dla którego obliczasz:
                    </label>
                        <select name="region" value={this.state.region} onChange={e => this.inputHandler(e)}>
                            <option value="800">dolnośląskie</option>
                            <option value="600">wielkopolskie</option>
                            <option value="500">zachodniopomorskie</option>
                            <option value="550">mazowieckie</option>
                            <option value="653">śląskie</option>
                            <option value="700">pomorskie</option>
                            <option value="400">lubuskie</option>
                            <option value="490">lubelskie</option>
                            <option value="500">podkarpackie</option>
                            <option value="800">warmińskomazurskie</option>
                            <option value="550">świętokrzyskie</option>
                            <option value="800">podlaskie</option>
                            <option value="760">opolskie</option>
                            <option value="600">kujawskopomorskie</option>
                            <option value="400">łodźkie</option>
                            <option value="700">małopolskie</option>
                        </select>
                    <div className="water-summary">
                        <h1 className="water-amount">Ilość wody rocznie:</h1> <h1 className="water-amount__yellow">{this.state.score.toFixed(0)} </h1> <h1 className="water-amount"> litrów </h1>
                    </div>
                </form>
                    <img src={image5} className="image5" alt="picture"/>
                </div>
                <CheckOptions score={this.state.score} scoreSetter = {()=>this.nanChecker()}/>
            </>
        );
    }
};

export default MultiplyNumbers;


