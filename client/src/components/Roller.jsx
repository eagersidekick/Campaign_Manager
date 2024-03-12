import React from "react";

class Roller extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rollResult: null,
            die: null
        }
    }

    critCheck(rollResult, die){
        if(rollResult == die){
            return "has-text-success"
        } else if (rollResult == 1){
            return "has-text-danger"
        } else return "has-text-light"
    }

    rollDice(max) {
        let rollResult = Math.floor(Math.random() * max + 1);
        this.setState({ rollResult: rollResult, die: max })
    };

    render() {

        if (this.state.rollResult) {
            var result = (
            <div className="section">
            <p id="roll" className={"bad-script subtitle " + this.critCheck(this.state.rollResult, this.state.die)}>D{this.state.die}: {this.state.rollResult}</p>
            </div>
            )
        }

        return (
            <div>
                <div>
                    <button onClick={() => this.rollDice(100)} className="bad-script-dark button m-1">D100</button>
                    <button onClick={() => this.rollDice(20)} className="bad-script-dark button m-1">D20</button>
                    <button onClick={() => this.rollDice(12)} className="bad-script-dark button m-1">D12</button>
                    <button onClick={() => this.rollDice(10)} className="bad-script-dark button m-1">D10</button>
                    <button onClick={() => this.rollDice(8)} className="bad-script-dark button m-1">D8</button>
                    <button onClick={() => this.rollDice(6)} className="bad-script-dark button m-1">D6</button>
                    <button onClick={() => this.rollDice(4)} className="bad-script-dark button m-1">D4</button>
                </div>
                {result}
            </div>
        )
    }
}

export default Roller;