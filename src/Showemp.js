import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Showemp()
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
    },[id]);
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Employee Information</h1>
            <h2 style={{textAlign:"left"}}>Welcome : {einfo.empnme}
                &nbsp;
                <input type="button" value="Logout" className="btn btn-success" onClick={()=>{navigate("/Login")}}/>
            </h2>
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
           
        </div>
    );
 

}
export default Showemp;