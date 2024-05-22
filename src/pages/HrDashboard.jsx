import { useState } from "react";
import Navbar from "../components/Navbar";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import UserService from "../Services/UserService";
import PathSimple from "../util/PathSimple.json"
import CircularProgress from '@mui/material/CircularProgress';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
export default function HrDashboard(){
        const[enroll,setEnroll] = useState(0);

        const[firstName,setFirstName] = useState("");
        const[lastName,setLastName] = useState("");
        const[email,setEmail] = useState("");
        const[password,setPassword] = useState("");
        const[designation,setDesignation] = useState("technical");
        const[experience,setExperience] = useState("entry");
        let [welcomesteps,setWelcomeSteps] = useState([]);
        let [preonboardingsteps,setPreonboardingSteps] = useState([]);
        let [onboardingsteps,setOnboardingSteps] = useState([]);
        let [postonboardingsteps,setPostOnboardingSteps] = useState([]);
        let [nextstepssteps,setNextstepssteps] = useState([]);
        function sDesignation(e){
            console.log(e.target.value);
            setDesignation(e.target.value);
        }
        function sExperience(e){
            console.log(e.target.value);
            setExperience(e.target.value);
        }

        async function register(){
            setEnroll(1);
            const data = {
                firstName : firstName,
                lastName : lastName,
                email : email,
                password : password,
                designation : designation,
                experience : experience,
            }
            console.log(PathSimple);
            console.log(data);
            let result = await UserService.register(data);
            result = result.data;
            console.log(result);
            for(var process of Object.keys(PathSimple.welcome)){
                if (result.welcome.includes(process)){
                    welcomesteps.push({'name':PathSimple["welcome"][process]["name"], "status":true});
                    console.log(process);
                    console.log(PathSimple["welcome"][process]["name"]);
                }
                else{
                    welcomesteps.push({'name':PathSimple["welcome"][process]["name"], "status":false});
                }
            }

            for(var process of Object.keys(PathSimple.preonboarding)){
                if (result["pre-onboarding"].includes(process)){
                    preonboardingsteps.push({'name':PathSimple["preonboarding"][process]["name"], "status":true});
                    console.log(process);
                    console.log(PathSimple["preonboarding"][process]["name"]);
                }
                else{
                    preonboardingsteps.push({'name':PathSimple["preonboarding"][process]["name"], "status":false});
                }
            }

            for(var process of Object.keys(PathSimple.onboarding)){
                if (result["onboarding"].includes(process)){
                    onboardingsteps.push({'name':PathSimple["onboarding"][process]["name"], "status":true});
                    console.log(process);
                    console.log(PathSimple["onboarding"][process]["name"]);
                }
                else{
                    onboardingsteps.push({'name':PathSimple["onboarding"][process]["name"], "status":false});
                }
            }
            
            for(var process of Object.keys(PathSimple.postonboarding)){
                if (result["post-onboarding"].includes(process)){
                    postonboardingsteps.push({'name':PathSimple["postonboarding"][process]["name"], "status":true});
                    console.log(process);
                    console.log(PathSimple["postonboarding"][process]["name"]);
                }
                else{
                    postonboardingsteps.push({'name':PathSimple["postonboarding"][process]["name"], "status":false});
                }
            }
            
            for(var process of Object.keys(PathSimple.nextsteps)){
                if (result["next-steps"].includes(process)){
                    nextstepssteps.push({'name':PathSimple["nextsteps"][process]["name"], "status":true});
                    console.log(process);
                    console.log(PathSimple["nextsteps"][process]["name"]);
                }
                else{
                    nextstepssteps.push({'name':PathSimple["nextsteps"][process]["name"], "status":false});
                }
            }

            setEnroll(2);
        }

        return (

                <>
                
                    <Navbar login={true} />

                    <div className="process-section flex flex-col w-screen min-h-screen justify-start items-center mt-5">
                    
                <div className="section-1 flex flex-col w-3/4 items-center border-solid rounded-3xl border-transparent my-4 px-5 py-5">
                    {enroll === 0 ? 
                    <div className="form text-black flex flex-col w-full lg:w-2/4">
                        <div className="buttons text-3xl flex flex-row items-start justify-around w-full mb-3">
                        <div className="text-black px-4 py-2 text-slate-600">Add Candidate</div>
                        
                    </div>
                        <input className=" bg-transparent border-solid border-2 border-black-300 rounded-xl px-4 py-2 mb-4" type="text" name="" id="" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}/>
                        <input className=" bg-transparent border-solid border-2 border-black-300 rounded-xl px-4 py-2 mb-4"  type="text" name="" id="" placeholder="Last Name" onChange={e=>setLastName(e.target.value)}/>
                        <input className=" bg-transparent border-solid border-2 border-black-300 rounded-xl px-4 py-2 mb-4" type="text" name="" id="" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
                        <input className=" bg-transparent border-solid border-2 border-black-300 rounded-xl px-4 py-2 mb-4" type="password" name="" id="" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
                        <select value={designation} className=" bg-transparent border-solid border-2 border-black-300 rounded-xl  px-4 py-2 mb-4" name="Designation" id="" onChange={e=>sDesignation(e)} >
                            <option className="text-black" value="technical">Associate Software Engineer</option>
                            <option className="text-black" value="technical">Graduate Engineer Trainee</option>
                            <option className="text-black" value="technical">Premier Graduate Engineer Trainee</option>
                            <option className="text-black" value="non-technical">HR Recruiter</option>
                            <option className="text-black" value="leadership">Project Manager</option>
                        </select>
                        <select value={experience} className=" bg-transparent border-solid border-2 border-black-300 rounded-xl px-4 py-2 mb-4" name="" id="" onChange={e=>sExperience(e)}>
                            <option className="text-black" value="entry">Entry</option>
                            <option className="text-black" value="mid">Mid</option>
                            <option className="text-black" value="senior">Senior</option>

                        </select>
                        <button className="bg-slate-600 rounded-xl text-white py-2" onClick={register}>Enroll</button>
                    </div>
                    : 
                    null

                    }

                    {
                        enroll === 1 ?
                        <CircularProgress />
                        : null
                    }

                    {
                        enroll === 2 ?
                            <div className="flex flex-col text-black w-full">
                                <div className="text-2xl self-center text-slate-600 align-middle mb-10">GenAI Onboarding Path <AutoFixHighIcon/></div>
                                <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between">
                                    <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Welcome <ArrowForwardIcon /></div>
                                    
                                    {welcomesteps.map((v,i) => (
                                        v.status == true ?
                                        <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle ">{v.name}  <AddTaskIcon className="text-green-600"/></div>
                                        
                                        
                                        :
                                       null
                                    ))}
                                </div>


                                <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-start">
                                <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Pre-Onboarding <ArrowForwardIcon /></div>
                                    {preonboardingsteps.map((v,i) => (
                                        v.status == true ?
                                        <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle ">{v.name}  <AddTaskIcon className="text-green-600"/></div>
                                        
                                        
                                        :
                                       null
                                    ))}
                                </div>

                                <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-start">
                                <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Onboarding <ArrowForwardIcon /></div>
                                    {onboardingsteps.map((v,i) => (
                                        v.status == true ?
                                        <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle ">{v.name}  <AddTaskIcon className="text-green-600"/></div>
                                        
                                        
                                        :
                                       null
                                    ))}
                                </div>
                                <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-start">
                                <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Post-Onboarding <ArrowForwardIcon /></div>
                                    {postonboardingsteps.map((v,i) => (
                                        v.status == true ?
                                        <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle ">{v.name}  <AddTaskIcon className="text-green-600"/></div>
                                        
                                        
                                        :
                                       null
                                    ))}
                                </div>
                                <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-start">
                                <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Next Steps <ArrowForwardIcon /></div>
                                    {nextstepssteps.map((v,i) => (
                                        v.status == true ?
                                        <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle ">{v.name}  <AddTaskIcon className="text-green-600"/></div>
                                        
                                        
                                        :
                                       null
                                    ))}
                                </div>

                            </div>

                            

                        :

                        null

                    }










                </div>
                </div>
                
                
                
                </>


        );

}