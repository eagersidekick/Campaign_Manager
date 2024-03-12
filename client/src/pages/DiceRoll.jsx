function DiceRoll() {

// function diceSelect(dice){

// }

function rollDice(max) {
    return Math.floor(Math.random() * max + 1);
};

function refreshPage() {
    window.location.reload()};

    return (
      <div id="background-img" className='content has-text-centered silver-text'>
        <h1 id='welcome-text' className='silver-text title bad-script-regular'>Roll Dice</h1>
        <div className='section'>
          <p className='subtitle bad-script-regular'>Click to Roll Dice!</p>
          <button class="button" onClick={refreshPage}>Reroll</button>
            <p className="bad-script-regular">D100 = {rollDice(100)}</p>
            <p className="bad-script-regular">D20 = {rollDice(20)}</p>
            <p className="bad-script-regular">D12 = {rollDice(12)}</p>
            <p className="bad-script-regular">D10 = {rollDice(10)}</p>
            <p className="bad-script-regular">D8 = {rollDice(8)}</p>
            <p className="bad-script-regular">D6 = {rollDice(6)}</p>
            <p className="bad-script-regular">D4 = {rollDice(4)}</p>
        </div>
      </div>
    );
  }
  
  export default DiceRoll;
  