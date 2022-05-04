
import { useState } from 'react';

function Login() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    if(inputs.username == "nmannan" && inputs.password == "nmannan"){
        window.location.href = 'https://stackoverflow.com/questions/50793148/how-to-redirect-to-a-new-page-from-a-function-in-react'
    }
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Password: 
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
} 
 
// Exporting the component
export default Login; 
    