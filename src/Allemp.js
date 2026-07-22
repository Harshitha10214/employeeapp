import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
function Allemp()
{
    const [einfo,seteinfo]=useState([]);
     const[chk,setChk]=useState(0);
     const navigate=useNavigate();
      useEffect(()=>{
        axios.get("http://localhost:3400/employee")
          .then((res)=>{
            console.log(res.data);
            seteinfo(res.data);
        });
        },[chk]);

    const delemployee=(id)=>{
        axios.delete("http://localhost:3400/employee/"+ id)
            .then((res)=>{
                console.log("employee Deleted...");
                setChk(chk+1);
            })
    }

    
    return(
        <div>
            <hr/>
            <p style={{textAlign:"center"}}>
                <Link to ="/Register" className="btn btn-secondary btn-lg">New Employee</Link>
                &nbsp;&nbsp;
                <Link to ="/empdata" className="btn btn-secondary btn-lg">View all employee</Link>
                &nbsp;&nbsp;
                <Link to ="/Login" className="btn btn-secondary btn-lg">Logout</Link>

            </p>
           
                 
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
                    <th>operations</th>

                </tr>
                </thead>
                <tbody>

                {
                    einfo.map((einfo)=>(
                        <tr>
                            <td>{einfo.id}</td>
                            <td>{einfo.empnme}</td>
                            <td>{einfo.job}</td>
                            <td>{einfo.salary}</td>
                            <td>{einfo.email}</td>
                            <td>{einfo.pswd}</td>
                            <td>
                                <input type="button" value="View" className="btn btn-info" onClick={()=>{navigate("/oneemp/" + einfo.id)}}/>
                                &nbsp;&nbsp;
                                <input type="button" value="Modify" className="btn btn-warning" onClick={()=>{navigate("/modemp/" + einfo.id)}}/>
                                &nbsp;&nbsp;
                                 <input type="button" value="Delete" className="btn btn-primary" onClick={()=>{delemployee(einfo.id)}}/>
                            </td>
     
                        </tr>
                    ))   
                }
                </tbody>
                
            </table>
            
        </div>
    );
}
export default Allemp;