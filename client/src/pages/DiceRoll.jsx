import Roller from '../components/Roller';

export default function DiceRoll() {

  return (
    <div className='character-container'>
      <div className='character-box has-text-centered'>
        <h1 id='welcome-text' className='bad-script-regular title'>Roll Dice</h1>
        <div className='section'>
          <p className='bad-script-regular subtitle'>Click to Roll Dice!</p>
          <Roller />
        </div>
      </div>
    </div>
  );
}
