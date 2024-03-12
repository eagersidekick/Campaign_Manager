import Roller from '../components/Roller';

export default function DiceRoll() {

    return (
      <div id="background-img" className='content has-text-centered silver-text'>
        <h1 id='welcome-text' className='silver-text title'>Roll Dice</h1>
        <div className='section'>
          <p className='subtitle silver-text'>Click to Roll Dice!</p>
            <Roller />
        </div>
      </div>
    );
  }
  