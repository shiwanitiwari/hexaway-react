import "../styles/Home.css";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logoImage from "../assets/logoImage.png";
import UserService from "../Services/UserService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[err,setErr] = useState("");
    async function login(){
        setErr("");
        const data = {
            "email":email,
            "password":password
        }
        let result = await UserService.login(data);
        if(result == "HR"){
            navigate("/hrdashboard");
        }
        else if (result === "CANDIDATE"){
            navigate("candidatedashboard");
        }
        else {
            setErr("E-mail or Password incorrect!")
        }
    }
    return(
        <>
           <div className="home-container flex flex-col lg:flex-row items-center justify-center">

                <div className="section-1 flex flex-col h-[95vh] w-[90vw] lg:w-1/2 bg-slate-600 items-center justify-center border-solid rounded-3xl border-transparent my-3 mx-2">
                
                    <img src={logoImage} className="h-64 w-96"/>
                    <div className="section-1-heading text-white text-4xl tracking-[1rem] my-4 font-thin font-roboto text-center">
                        <i>H</i>EXAWAY
                    </div>
                    <div className="section-1-tagline text-white text-sm font-thin font-roboto italic text-center">
                        PERSONALIZED ONBOARDING WITH HEXAWARE
                    </div>

                </div>

                <div className="section-2 flex flex-col h-[95vh] w-[95vw] lg:w-1/2 items-center justify-center border-solid rounded-3xl border-transparent my-3 mx-2">
                    <div className="section-2-login-form flex flex-col items-start justify-center">
                    <div className="section-2-heading">
                        <div className="text-5xl font-thin font-roboto my-3">Welcome!</div>
                        <div className="text-2xl font-thin my-3">Please Log-In to continue...</div>
                    </div>
                    <input type="text" name="" id="" placeholder="E-mail" className="my-3 border-solid border-black-400 border-2 rounded-xl w-full px-3 py-2" value={email} onChange={e=>setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" className="my-3 border-solid border-black-400 border-2 rounded-xl w-full px-3 py-2" value={password} onChange={p=>setPassword(p.target.value)}/>
                    <button className="text-md my-3 w-full rounded-xl bg-slate-600 text-white px-3 py-1" onClick={login}>Login</button>
                    <div className="error text-red-600">{err}</div>
                    <a href="#" className="my-3 text-blue-500">forgot password? Click here</a>

                    </div>
                </div>




           </div>
        </>
    );

}

