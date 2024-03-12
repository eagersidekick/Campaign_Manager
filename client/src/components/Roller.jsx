import React from "react";

class Roller extends React.Component {

    constructor(props) {
        super(props);
        //setting initial component state to include rollResult and die
        this.state = {
            rollResult: null,
            die: null
        }
    }

    critCheck(rollResult, die){
        // checks if a result is max or min. max result is green, min is red, default is white
        if(rollResult == die){
            return "has-text-success"
        } else if (rollResult == 1){
            return "has-text-danger"
        } else return "has-text-light"
    }

    rollDice(max) {
        //sets variable to a random number based on die maximum
        let rollResult = Math.floor(Math.random() * max + 1);
        //sets state to reflect both max and random roll result
        this.setState({ rollResult: rollResult, die: max })
    };

    render() {

        //defining result as a variable to only render if rollResult is not null
        if (this.state.rollResult) {
            var result = (
            <div className="section">
                {/* checks to see if a result is a crit before applying styling to text */}
            <p id="roll" className={
                "bad-script subtitle " + this.critCheck(this.state.rollResult, this.state.die)}
                // renders die used and result based on state values
                >D{this.state.die}: {this.state.rollResult}</p>
            </div>
            )
        }

        return (
            <div>
                <div>
                    {/* each button calls the rollDice method with a max of the dice value being rolled */}
                    <button onClick={() => this.rollDice(100)} className="bad-script-dark button m-1">D100</button>
                    <button onClick={() => this.rollDice(20)} className="bad-script-dark button m-1">D20</button>
                    <button onClick={() => this.rollDice(12)} className="bad-script-dark button m-1">D12</button>
                    <button onClick={() => this.rollDice(10)} className="bad-script-dark button m-1">D10</button>
                    <button onClick={() => this.rollDice(8)} className="bad-script-dark button m-1">D8</button>
                    <button onClick={() => this.rollDice(6)} className="bad-script-dark button m-1">D6</button>
                    <button onClick={() => this.rollDice(4)} className="bad-script-dark button m-1">D4</button>
                </div>
                {/* calling result variable from if statement earlier in render */}
                {result}
            </div>
        )
    }
}

export default Roller;