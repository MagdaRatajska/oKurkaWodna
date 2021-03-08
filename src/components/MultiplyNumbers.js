import React, {Component} from "react";
import CheckOptions from "./CheckOptions";
import image4 from "../images/image4.jpg";

class MultiplyNumbers extends Component {
    state = {
        roofDimensionA: 0,
        roofDimensionB: 0,
        typeOfRoof: 0,
        region: 0
    }

    nanChecker = () => {
        if (!isNaN(this.state.roofDimensionA) && !isNaN(this.state.roofDimensionB) && !isNaN(this.state.typeOfRoof) && !isNaN(this.state.region)) {
            return +(this.state.roofDimensionA) * +(this.state.roofDimensionB) * +(this.state.typeOfRoof) * +(this.state.region);
        } else {
            return "Wprowadź wymiary dachu. Wybierz wojewódźtwo i rodzaj dachu";
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
        return (
            <>
                <div>
                <form className="multiply-numbers__form">
                    <h3 className="multiply__description" id="calculator">Kalkulator ilości wody, która spływa z Twojego dachu w ciągu roku: </h3>
                    <label>
                        Wprowadź pierwszy wymiar dachu w metrach:
                    </label>
                    <input
                        type="number"
                        name="roofDimensionA"
                        value={this.state.roofDimensionA}
                        onChange={e => this.inputHandler(e)}
                    />
                    <br/>
                    <label>
                        Wprowadź drugi wymiar dachu w metrach:
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
                            <option value="1">papa bitumiczna</option>
                            <option value="2">skosny z dachówską</option>
                            <option value="3">skosny z blachą</option>
                            <option value="1">dach płaski</option>
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
                        <h1 className="water-amount">Ilość wody, którą można złapać rocznie:</h1> <h1 className="water-amount__yellow">{this.nanChecker()} </h1> <h1 className="water-amount"> litrów </h1>
                    <CheckOptions/>
                    </div>
                </form>
                </div>
                <div>
                    <img src={image5} className="image5" alt="picture"/>
                </div>
            </>
        );
    }

}

export default MultiplyNumbers;


