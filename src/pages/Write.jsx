

import { useState } from "react";
import "./Write.css";
import axios from "axios";
import baseurl from "../Api";


export default function Write() {



  
  const [file, setFile] = useState(null);
  var[users,setUsers] = useState([]);
  var[selectedimage,setSelectedimage] = useState();
  const [inputs,setInputs] = useState("");


  const handleimage =(event)=>{
    const file = event.target.files[0];
    setSelectedimage(file)
    inputs.profilephoto=file;
}
const saveData =()=>{
  console.log(inputs)
  axios.post(baseurl+"/write/writenew",inputs)
  .then((response)=>{alert("Record Saved")})
  .catch(err=>console.log(err))
}
const inputhandler =(event)=> {
  const {name,value}=event.target
  setInputs((inputs)=>({...inputs,[name]:value}))
  console.log(inputs)
}


const savedata =()=>{
    const formdata = new FormData();
    formdata.append('title',users.title);
    formdata.append('desc',users.desc);    
      formdata.append('image', selectedimage);
  
    fetch(`http://localhost:4005/pedit/${users._id}`,
    {method:'put',body:formdata,})
    .then((response)=>response.json())
    .then((data)=>{
        alert("record saved")
    })
    .catch((err)=>{
       console.log("error",err)
    })
  
}
  



  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" >
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            // onChange={(e) => setFile(e.target.files[0])}
            onChange={handleimage}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            name="title"
            onChange={inputhandler}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
           name="desc"
           onChange={inputhandler}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit" onClick={saveData}>
          Publish
        </button>
      </form>
    </div>
  );
}