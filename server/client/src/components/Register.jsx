import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";

const Register = () => {
  // const [search,setSearch] =useState('');
  const [record, setRecord] = useState([]);
  const [selecteduser, setSelectedUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
  });
  const [updateFlag,setUpdateFlag] = useState(false);
 


  //  Object Destructuring
  const { fullname, username, password} = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // On Page load display all records
  const loadEmployeeDetail = async () => {
    /*await fetch('http://localhost:5000/user')
         .then((response)=>{        
            return response.json();            
          })
         .then((myJson)=> {
            setRecord(myJson);
            console.log(record);
          });*/
    await axios
    //"http://localhost:5000/user"
      .get("/user")
      .then((res) => {
        //console.log(res);
        setRecord(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    loadEmployeeDetail();
    setUser({
      fullname:selecteduser.fullname,
      username:selecteduser.username,
      password:selecteduser.password
    })

   
  }, [selecteduser]);

  //const handleReset = () => {
   // Array.from(document.querySelectorAll("input")).forEach(
   //   (input) => (input.value = "")
  //  );
 // };
  // Insert Employee Records
  const submitEmployeeRecord = async (e) => {
    e.preventDefault();
    //http://localhost:5000
    await axios.post("/user/add-user", user);
    
    console.log(user);
    loadEmployeeDetail();
    setUser({
      fullname:"",username:"",password:""
    })
    alert("Data Inserted");
  };

 
// component={Link} to={`/edit/${name._id}`}
const handleEdit =(id)=>{
  setUpdateFlag(true)
 // alert(id)
 const filterData = record.filter((user)=>user._id===id);
//console.log(filterData[0].fullname);
  setSelectedUser({
    id: filterData[0]._id,
    fullname : filterData[0].fullname,
    username : filterData[0].username,
    password : filterData[0].password,
  });
  console.log(selecteduser);
}
//update user
const handleUpdate = (e)=>{
  e.preventDefault();
  //console.log(selecteduser.id);
  
  let id = selecteduser.id;
  //http://localhost:5000
  axios.put(`/user/edit-user/${id}`,user)
  .then((res)=>{
    console.log(res.data);   
    alert('Updated') 
    loadEmployeeDetail();
    setUpdateFlag(false);
    // clear input field
    setUser({
      fullname:"",username:"",password:""
    })
  })
  .catch((err)=>{
    console.log(err.message);
  })

}

const handleDelete =(id, e)=>{
 
 // alert(id)
 //http://localhost:5000
 axios.delete(`/user/delete-user/${id}`)
 .then((res)=>{
  console.log(res);
  loadEmployeeDetail();
 })
 .catch((err)=>{
  console.log(err.message);
 })
}
  return (
    <div className="App">
      
      <h1> User Register </h1>
      <hr />
      <form method="post" id="myForm">
       Name    : &nbsp; &nbsp;&nbsp; <input
          type="text"
          placeholder="fullname"
          id="fullname"
          name="fullname"
          value={fullname}
          onChange={onInputChange}
        />
        <br />
       Username : <input
          type="text"
          placeholder="username"
          id="username"
          name="username"
          value={username}
          onChange={onInputChange}
        />
        <br />
       Password : <input
          type="text"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
        <br />
        {
          updateFlag? (
            <input type="submit" value="Upadte" onClick={handleUpdate}  />
          ):(
          <input type="submit" value="Submit" onClick={submitEmployeeRecord} />)
        }
      </form>
      <div className="inline-div">
      <Link to="/">
        <button className="btn">Back</button>
      </Link>
      <Link to="/login">
        <button className="btn">Login</button>
      </Link>
        <button>
        <CSVLink
        data={record}
        filename={"my-file.csv"}
        className="btn btn-primary"
        target="_blank"
      >
        Download me
      </CSVLink>
        </button>
     
      &nbsp;&nbsp;
      <button onClick={loadEmployeeDetail}>View</button>
      </div>
    
      <br/><br/>
      <table className="table" id="mytable">
        <thead className="theader">
          <tr>
            <th>Full Name</th>
            <th>user name</th>
            <th>password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {record && record.map((userData, index) => (
            <tr key={index}> 
              
              <td className="arrow-td">{userData.fullname}<button className="arrow-btn">{">"}</button></td>
                      
              <td>{userData.username}</td>
              <td>{userData.password}</td>
              <td>
                
              <button onClick={()=>{handleEdit(userData._id)}}>EDIT</button> &nbsp;
              <button onClick={()=>{handleDelete(userData._id)}}>DELETE</button>

                <Link className=" mr-2" to={`/EditEmployee/editID/${userData.id}`}>
                  <i className="fa fa-edit" aria-hidden="true"></i>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Register;
/** { <Link to={`/edit/${name._id}`}>
                  <p>Edit</p>
                </Link>} */