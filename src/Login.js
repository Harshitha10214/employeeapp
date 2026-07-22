import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login()
{
    const [uname,setUname]=useState("");
    const[pwd,setPwd]=useState("");
    const navigate=useNavigate();
    const [info,setinfo]=useState("");
    const [einfo,seteinfo]=useState([]);
    const[error,seterror]=useState({});
    
    useEffect(()=>{
        axios.get("http://localhost:3400/employee")
        .then((res)=>{
            console.log(res.data);
            seteinfo(res.data);
        })
    },[])

    const  LoginCheck=()=>{
        if(uname==="Admin" && pwd==="admin@123")
            navigate('/empdata');
        else
        {
            einfo.map((einfo)=>{
                if(einfo.email===uname && einfo.pswd===pwd)
                {
                    navigate('/show/'+ einfo.id)
                }
            });
        }
            setinfo('user details are incorrect');
    }
    
    const validations=()=>{
        let errorinfo={};
        let flag=true;

        if (uname==="")
        {
            errorinfo.uerr="username is required";
            flag=false;
        }
        if(pwd==="")
        {
            errorinfo.perr="password must be required";
            flag=false;
        }
        seterror(errorinfo);
        return flag;
     }
      


    
    return(
        <div>
             <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="row">
                            <div className="col-md-3">
                               
                                <b>Login Here</b>
                            </div>
                            </div>
                            <br/>

                        </div>
                        <div className="card-body">
                            <label>Username</label>
                           <br/>
                          <input type="text" name="txtuser"  className="form-control" onChange={(e)=>{setUname(e.target.value)}} />
                          <br/>
                          <label>Password</label><br/>
                          <input type="password" name="txtpwd" className="form-control"  onChange={(e)=>{setPwd(e.target.value)}} />
                          <br/><br/>
                          <input type="button" value="Submit" className="btn btn-primary"  onClick={LoginCheck}/>
                          
                        </div>
                    </div>

<h2>{info}</h2>
                </div>
                <div className="col-md-3"></div>
            </div>
        
            
        </div>
    );
}
export default Login;