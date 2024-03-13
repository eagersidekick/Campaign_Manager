function Home() {
  return (
    // creates the container that holds the content
    <div className="character-container">
    <div className='character-box content has-text-centered silver-text'>
      {/* styles the text */}
      <h1 id='welcome-text' className='bad-script-regular title'>Welcome, adventurer!</h1>
      <div className="column">
      <div>
        <p className='bad-script-regular subtitle'>Manage TableTop campaigns and characters</p>
        <p></p>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home;
