import { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import baseurl from "../Api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const savedata = ()=>{
    console.log("clicked")
    console.log(formData)
   axios.post(baseurl+'/register/registerview',formData)
    .then((response)=>{alert("Record save")})
    .catch(err=>console.log(err))
    navigate('/homepage')
  
  } 
  
  const logindata = ()=>{
    console.log("clicked")
     navigate('/login')
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, you can submit the data or perform other actions here
      console.log('Form submitted:', formData);
    } else {
      // Update the state with validation errors
      setErrors(validationErrors);
    }
  };



  


  const validateForm = (data) => {
    let errors = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email || !emailRegex.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!data.password || data.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    // Validate confirmPassword
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm" onSubmit={handleSubmit}> 
        <label>Username</label>
          <input type="text"  name="username"  className="registerInput" placeholder="Enter your username.." onChange={handleChange}/>
          <label>Email</label>
          <input type="text" name="email" className="registerInput" placeholder="Enter your email.." onChange={handleChange}/>
          <label>Password</label>
          <input type="password" name="password" className="registerInput" placeholder="Enter your password.." onChange={handleChange}/>
          <label>Confirm Password</label>
          <input type="password" name="confirmpassword"className="registerInput" placeholder="Enter confirm password.." onChange={handleChange}/>
          {/* {errors && 'All fields must be entered'} */}
          <button className="registerButton" onClick={savedata}>Register</button>          

        <button className="registerLoginButton" onClick={logindata}>Login</button>
</form>
    </div>
  )
}

export default Register