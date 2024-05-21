import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import LinearProgress from '@mui/material/LinearProgress';
import WelcomeService from '../Services/WelcomeService';
import PreonboardingService from '../Services/PreonboardingService';
import OnboardingService from '../Services/OnboardingService';
import PostonboardingService from '../Services/PostonboardingService';
import NextstepsService from '../Services/NextstepsService';
export default function CandidateDashboard(){
        async function scorer (){
            let score = 0;
            let total = 0;
            let welcome_data =  await WelcomeService.status();
            let preonboarding_data = await PreonboardingService.status();
            let onboarding_data =  await OnboardingService.status();
            let postonboarding_data =  await PostonboardingService.status();
            let nextsteps_data = await NextstepsService.status();
            for(var process of Object.keys(welcome_data)){
                if(welcome_data[process] == "completed"){
                    score = score + 1;
                }
                total = total + 1;
            }
            for(var process of Object.keys(preonboarding_data)){
                if(preonboarding_data[process] == "completed"){
                    score = score + 1;
                }
                total = total + 1;
            }
            for(var process of Object.keys(onboarding_data)){
                if(onboarding_data[process] == "completed"){
                    score = score + 1;
                }
                total = total + 1;
            }
            for(var process of Object.keys(postonboarding_data)){
                if(postonboarding_data[process] == "completed"){
                    score = score + 1;
                }
                total = total + 1;
            }
            for(var process of Object.keys(nextsteps_data)){
                if(nextsteps_data[process] == "completed"){
                    score = score + 1;
                }
                total = total + 1;
            }
            console.log(score,total);
            let per = score*100/total;
            per = Math.round(per);
            setFullProgress(per);

        }
        const [fullProgress,setFullProgress] = useState(0);

        useEffect(() => {
            scorer();
        },[])

        return (

                <>
                
                    <Navbar login={true} />
                        <div className="mt-20 mx-20 items-center justify-center align-middle"><LinearProgress  color="primary" variant="determinate" value={fullProgress} className="h-10" /></div>
                    <div className="hrdashboard-section mt-[10%] flex flex-col lg:flex-row items-center justify-around">
                        <a href="/welcome" className="bg-slate-600 text-white py-5 px-10 text-center rounded-lg mx-5 mb-5">Welcome</a>
                        <a href="/preonboarding" className="bg-slate-600 text-white py-5 px-10 text-center rounded-lg mx-5 mb-5">Pre-Onboarding</a>
                        <a href="/onboarding" className="bg-slate-600 text-white py-5 px-10 text-center rounded-lg mx-5 mb-5">Onboarding</a>
                        <a href="/postonboarding" className="bg-slate-600 text-white py-5 px-10 text-center rounded-lg mx-5 mb-5">Post-Onboarding</a>
                        <a href="/nextsteps" className="bg-slate-600 text-white py-5 px-10 text-center rounded-lg mx-5 mb-5">Next Steps</a>

                    </div>
                
                
                
                </>


        );

}