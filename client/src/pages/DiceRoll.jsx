function DiceRoll() {

function rollDice(max) {
    return Math.floor(Math.random() * max + 1);
};

function refreshPage() {
    window.location.reload()};

    return (
      <div id="background-img" className='content has-text-centered silver-text'>
        <h1 id='welcome-text' className='silver-text title'>Roll Dice</h1>
        <div className='section'>
          <p className='subtitle silver-text'>Click to Roll Dice!</p>
          <button class="button" onClick={refreshPage}>Reroll</button>
            <p>D100 = {rollDice(100)}</p>
            <p>D20 = {rollDice(20)}</p>
            <p>D12 = {rollDice(12)}</p>
            <p>D10 = {rollDice(10)}</p>
            <p>D8 = {rollDice(8)}</p>
            <p>D6 = {rollDice(6)}</p>
            <p>D4 = {rollDice(4)}</p>
        </div>
      </div>
    );
  }
  
  export default DiceRoll;
  