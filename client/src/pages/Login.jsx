function Login() {

  return (
    <div className='content'>
      <div className='section'>
        <p className="title has-text-centered">Login</p>
        <form>
          <div className='section'>
            <label for='email'>Email</label>
            <input className='input' type='email' placeholder='Enter Email' />
        
            <label for='password'>Password</label>
            <input className='input' type='password' placeholder='Enter Password' />

            <button className='button submitbutton'>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
