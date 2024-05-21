import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostonboardingService from "../Services/PostonboardingService";
import path from "../util/PathSimple.json";
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
export default function PostOnboarding(){
    const [process,setProcess] = useState("process");
    const [list,setList] = useState([]);
    const [fullProgress,setFullProgress] = useState(0);

    async function processit(v){
        await PostonboardingService.process(v);
        setProcess("process");
    }


    async function get_list(){
        let welcome_list = await PostonboardingService.status();
        let final_list = [];
        let data = undefined;
        let score = 0;
        let total = 0;
        for(var i of Object.keys(path["postonboarding"])){
            if(Object.keys(welcome_list).includes(i)){
                data = {
                    "name":i,
                    "desc":path["postonboarding"][i]["name"],
                    "status":welcome_list[i],
                }
                final_list.push(data);
            }
            
        }
        setList(final_list);

        console.log(final_list);
        for(var process of Object.keys(welcome_list)){
            if(welcome_list[process] == "completed"){
                score = score + 1;
            }
            total = total + 1;
        }
        let per = score*100/total;
        per = Math.trunc(per);
        console.log(per,score,total)
        setFullProgress(per);
    }

    useEffect(()=>{
        get_list();
    },[process])



    return (
        <>
                    <Navbar login={true} />

                    <div className="mt-20 items-center justify-center align-middle"><LinearProgress  color="primary" variant="determinate" value={fullProgress} /></div>

                    <div className="process-section flex flex-col w-screen min-h-full mt-40 justify-center items-center">

                    <div className="w-3/4 flex flex-col justify-center items-center">

                        {
                            process == "process" ?

                            


                            <div className="flex flex-col lg:flex-row flex-wrap items-center lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Tasks</div>
                            
                            {list.map((v,i) => (
                                v.status == "completed" ?
                                
                                <div className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle cursor-pointer ">{v.desc} <DoneAllIcon className="text-green-600"/></div>
                                
                                
                                :
                                <div onClick={()=>setProcess(v.name)} className="text-black px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 align-middle cursor-pointer ">{v.desc} <HourglassBottomIcon className="text-yellow-600" /></div>
                            ))}
                        </div>


                            : null
                        }



{
                            process == "process27" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Station-h password reset</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">If you need to reset your StationH password, please follow these steps:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Visit the StationH login page or password reset portal.</li>
            <li>Click on the "Forgot Password" or similar option.</li>
            <li>Enter your registered email address or username.</li>
            <li>Follow the instructions in the password reset email you receive.</li>
            <li>Create a new password following the specified requirements.</li>
            <li>Log in to StationH with your new password.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you encounter any issues or need assistance with the password reset process, please contact our IT support team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for keeping your StationH password secure. We appreciate your cooperation in maintaining the security of our systems.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process27")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process28" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Office-365 password reset</div>
                            
                           
    <div class="mb-4">
        <p class="text-sm text-gray-700">If you need to reset your Office 365 password, please follow these steps:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Visit the Office 365 login page or password reset portal.</li>
            <li>Click on the "Forgot Password" or similar option.</li>
            <li>Enter your registered email address or username.</li>
            <li>Follow the instructions in the password reset email you receive.</li>
            <li>Create a new password following the specified requirements.</li>
            <li>Log in to Office 365 with your new password.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you encounter any issues or need assistance with the password reset process, please contact our IT support team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for keeping your Office 365 password secure. We appreciate your cooperation in maintaining the security of our systems.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process28")}}>Complete</div>
                        </div>


                            : null
                        }

                        </div>

                    </div>
        </>
    )
}