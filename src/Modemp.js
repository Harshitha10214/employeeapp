import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Modemp()
{
     const navigate=useNavigate();
    const {id}=useParams();
    const [einfo, seteinfo] = useState({}); 
       useEffect(()=>{

        axios.get("http://localhost:3400/employee/" + id)
        .then((res)=>{
            console.log(res.data);
            seteinfo(res.data);
        });
    },[]);

    const Updateemp=()=>{
        axios.put("http://localhost:3400/employee/"+id,einfo)
        .then ((res)=>{
            navigate("/empdata");
        })
    }
    return(
        
           
        <div>
            <h1>Modify the Data</h1>
            <hr/>
            
            
       
            <p style={{textAlign:"center"}}>
                <label>Employee ID</label><br />
                <input type="text" name="txteid" value={einfo.id}
                onChange={(e)=>{seteinfo({...einfo, id:e.target.value})}} /><br />

                <label>Employee Name</label><br />
                <input type="text" name="txtename" value={einfo.empnme}
                onChange={(e)=>{seteinfo({...einfo, empnme:e.target.value})}} /><br />

                <label>Job</label><br />
                <input type="text" name="txtjob" value={einfo.job}
                onChange={(e)=>{seteinfo({...einfo, job:e.target.value})}} /><br />

                <label>Salary</label><br />
                <input type="text" name="txtSal" value={einfo.salary}
                onChange={(e)=>{seteinfo({...einfo, salary:e.target.value})}} /><br />
                

                 <label>Email</label><br />
                <input type="text" name="txtmail" value={einfo.email}
                onChange={(e)=>{seteinfo({...einfo, email:e.target.value})}} /><br />

                <label>Password</label><br />
                <input type="text" name="txtpswd" value={einfo.pswd}
                onChange={(e)=>{seteinfo({...einfo, pswd:e.target.value})}} /><br />
                <br/>

                <input type="button"  value="Modify Student" className="btn btn-info" onClick={Updateemp} /> 
                 &nbsp;&nbsp;
                <input type="button" value="Back" className="btn btn-success" onClick={()=>{navigate("/empdata")}} />

            </p>
        </div>
    );
}
export default Modemp;