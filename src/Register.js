import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Register()
{
    const navigate=useNavigate();
    const [einfo,seteinfo]=useState({
        "id":0,
        "empnme":"",
        "job":"",
        "salary":0.0,
        "email":"",
        "pswd":""
    });
    const addnewemp=(e)=>{
        e.preventDefaults();
        console.log(einfo);
        axios.post("http://localhost:3400/employee",einfo)
        .then((response)=>{
            console.log("New employee is added...");
             navigate("/empdata");
        });
    }
    return(
        <div>
           
            <p style={{textAlign:"center"}}>
                <Link to ="/Register" className="btn btn-secondary btn-lg">New Employee</Link>
                &nbsp;&nbsp;
                <Link to ="/empdata" className="btn btn-secondary btn-lg">View all employee</Link>
                &nbsp;&nbsp;
                <Link to ="/Login" className="btn btn-secondary btn-lg">Logout</Link>
            </p>
           
            
             <form method="POST" onSubmit={addnewemp}>
                <div className="row">
            
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                                <div className="col-md-3">
                                    <b>Employee Register</b>
                                </div>
                            </div>
                            <br/>
                        </div>
                        <br/>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Emp ID</label>&nbsp;
                                <input type="text" name="empno" className="form-control" onChange={(e)=>{seteinfo({...einfo,id:e.target.value})}} required/>
                            </div>
                            
                            <div className="col-md-6">
                                <label>Empname</label>&nbsp;
                                <input type="text" name="empnme" className="form-control" onChange={(e)=>{seteinfo({...einfo,empnme:e.target.value})}} required/>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Job</label>&nbsp;
                                <select name="job" className="form-control" onChange={(e)=>{seteinfo({...einfo,job:e.target.value})}} required>
                                 <option value="-1">select</option>
                                   <option value="Developer">Developer</option>
                                  <option value="Analyst">Analyst</option>
                                  <option value="hr">HR</option>
                                </select>
                             </div>
                             <div className="col-md-6">
                                <label>Salary</label>&nbsp;
                                <input type="text" name="sal" className="form-control" onChange={(e)=>{seteinfo({...einfo,salary:e.target.value})}} required/>
                             </div>
                                 
                        </div><br/>
                        <div className="row">
                            <div className="col-md-6">
                                <label>Email</label>&nbsp;
                                <input type="text" name="mail" className="form-control" onChange={(e)=>{seteinfo({...einfo,email:e.target.value})}} required/>
                            </div>
                            <div className="col-md-6">
                                <label>Password</label>&nbsp;
                                <input type="text" name="pwd" className="form-control" onChange={(e)=>{seteinfo({...einfo,pswd:e.target.value})}} required/>
                             </div>
                        </div><br/>

                        
                        <input  type="submit" value="Register" className="btn btn-success" />
                    </div>
                    </div>
                </div>          
                <div className="col-md-3"></div>
                </div>
                </form>
            </div>
            
        
    );
}
export default Register;