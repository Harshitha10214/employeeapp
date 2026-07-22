import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function View1()
{
    const navigate=useNavigate();
    const {id}=useParams();
    const[einfo,seteinfo]=useState({});
    useEffect(()=>{
        axios.get("http://localhost:3400/employee/" + id)
        .then((res)=>{
            console.log(res.data);
            seteinfo(res.data);
        });
    },[]);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>View employee Information</h1>
            <h2>Welcome : {einfo.empnme}</h2>
            <hr/>
            <table className="table table-dark table-striped">
                <thead>
                <tr>
                   <th>Employee number</th>
                    <th>Employee  name</th>
                    <th>Employee Job</th>
                    <th>Salary</th>
                    <th>Email</th>
                    <th>Password</th>

                    

                </tr>
                </thead>
                <tbody>
                    <tr>
                            <td>{einfo.id}</td>
                            <td>{einfo.empnme}</td>
                            <td>{einfo.job}</td>
                            <td>{einfo.salary}</td>
                            <td>{einfo.email}</td>
                            <td>{einfo.pswd}</td>
                    </tr>
                </tbody>
                </table>
            <p style={{textAlign:"center"}}>
                <input type="button" value="Back" className="btn btn-success" onClick={()=>{navigate("/empdata")}}/>
            

            </p>
            
        </div>
    );
}
export default View1;