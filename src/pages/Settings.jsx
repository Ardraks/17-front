
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Settings.css";
import baseurl from "../Api";
import axios from "axios";


export default function Settings() {


  // const [username, setUsername] = useState([]);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [selectedimage,setSelectedimage] = useState(null);
  const [inputs,setInputs] = useState("");
  
 

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newProfile = {
  //     username,
  //     email,
  //     password,
  //   };
  // }



  var[users,setUsers] = useState([]);
  var[selected,setSelected] = useState();
  var[update,setUpdate] = useState(false);


  useEffect(()=>{
      axios.get(baseurl + "/register/sview")
      .then(response =>{
        console.log("sjbdja")
          console.log(response.data)
          setUsers(response.data)
      })
      .catch(err=>console.log(err))
  },[])


  const updatevalues =(value)=>{
    console.log("updated",value);
    setSelected(value);
    setUpdate(true);
    }

  const handleimage =(event)=>{
      const file = event.target.files[0];
      setSelectedimage(file)
      inputs.profilephoto=file;
  }

  const savedata =()=>{
      const formdata = new FormData();
      formdata.append('username',users.username);
      formdata.append('email',users.email);
      formdata.append('password',users.password);
      
        formdata.append('profilephoto', selectedimage);
    
      fetch(`http://localhost:4005/pedit/${users._id}`,
      {method:'put',body:formdata,})
      .then((response)=>response.json())
      .then((data)=>{
          alert("record saved")
      })
      .catch((err)=>{
         console.log("error",err)
      })
      // navigate('/certificateview')
  }
    
  


 
  return (
    <>
    <div className="settings">
          {users.map((value, index) => (
              <div key={index}>
          <div className="settingsWrapper">
           <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">  
          <label>Profile Picture</label>
          <div className="settingsPP">
          {file && (
        <img className="writeImg" src={URL.createObjectURL(file)}   alt="" />
      )} 
       
        {/* {value.profilephoto && (
                  <img className="writeImg" src={value.profilephoto} alt="" />
                )} */}
             
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
              // onChange={handleimage}
              onChange={(e) => setFile(e.target.files[0])}
            />
           
          </div>
          <label>Username</label>
          <input type="text" name="username"  value={value.username}
          />
          <label>Email</label>
          <input type="email" name="email" value={value.email}
           />
          <label>Password</label>
          <input type="password" name="password" value={value.password}
           />
          <button className="settingsSubmitButton" type="submit" onClick={savedata}>
            Update
          </button>  
        </form> 
        
      </div>
     
    </div>
  ))}
  
  <Sidebar/> 
  
  </div>
  </>
  );
}
