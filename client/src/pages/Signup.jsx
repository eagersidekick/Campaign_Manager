function Signup() {

  return (
    <div className='content'>
      <div className='section'>
        <p className="title has-text-centered">Sign Up!</p>
        <form>
            <div className='section'>
                <label for='name'>Name</label>
                <input className='input' type='name' placeholder='Enter Name'/>

                <label for='email'>Email</label>
                <input className='input' type='email' placeholder='Enter Email'/>

                <label for='password'>Password</label>
                <input className='input' type='password' placeholder='Enter Password'/>

                <button class="button submitButton">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;