import React, { useEffect, useState } from "react";
import axios from "axios";

const initialData = {
  username:'',
  password:'',
}

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState(initialData);
  const [error, setError] =useState("");
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  useEffect(()=>{
    // make a post request to retrieve a token from the api
    // when you have handled the token, navigate to the BubblePage route
    // axios.post("http://localhost:5000/api/login", {loginInfo})
    // .then(res => {
    //   console.log(res)
    //   localStorage.setItem("token", res.data.payload)
    // })
    // .catch(err => console.log(err))
  });
  
  // const error = "";
  //replace with error state
  const handleChange = (e) => {
    const {name, value} = e.target;
    setLoginInfo({
      ...loginInfo, [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", { username: 'Lambda School', password: 'i<3Lambd4' })
    .then(res => {
      localStorage.setItem("token", res.data.payload)
      props.history.push("/protected")
    })
    .catch(err => console.log(err))
    setLoginInfo(initialData)
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Build login form here</h2>
        <form onSubmit={handleSubmit}>
          <label>Username 
            <input
              data-testid="username"
              type="text"
              name="username"
              value={loginInfo.username}
              onChange={handleChange}
            />
          </label>
          <label>Password  
            <input
              data-testid="password"
              type="text"
              name="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
          </label>
        <button>Submit</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.