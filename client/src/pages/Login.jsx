import React from 'react';

function Login() {

  return (
    <div>
      <div>
        <form>
            <div>
                <label for='email'>Email</label>
                <input type='email' placeholder='Enter Email'/>
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password' placeholder='Enter Password'/>
            </div>
            <button class="submitButton">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
