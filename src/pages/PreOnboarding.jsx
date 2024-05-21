import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PreonboardingService from "../Services/PreonboardingService";
import path from "../util/PathSimple.json";
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
export default function PreOnboarding(){
    const [process,setProcess] = useState("process");
    const [list,setList] = useState([]);
    const [fullProgress,setFullProgress] = useState(0);

    async function processit(v){
        await PreonboardingService.process(v);
        setProcess("process");
    }


    async function get_list(){
        let welcome_list = await PreonboardingService.status();
        let final_list = [];
        let data = undefined;
        let score = 0;
        let total = 0;
        for(var i of Object.keys(path["preonboarding"])){
            if(Object.keys(welcome_list).includes(i)){
                data = {
                    "name":i,
                    "desc":path["preonboarding"][i]["name"],
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
                            process == "process7" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Personal Information</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Full Name:</span> John Doe</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Email:</span> johndoe@example.com</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Phone Number:</span> +1234567890</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Date of Birth:</span> 1990-01-01</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Gender:</span> Male</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700"><span class="font-medium">Address:</span> 123 Street, City, Country</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process7")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process8" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory Documents Upload for Entry-level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Congratulations on joining our team! To complete your onboarding process, please ensure you have the following mandatory documents ready for upload:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Copy of your Resume/CV</li>
        <li>Government-issued ID (e.g., Aadhaar Card, Passport, Driver's License)</li>
        <li>Educational Certificates (10th, 12th, and Degree)</li>
        <li>Offer Letter/Job Confirmation Letter</li>
        <li>Address Proof (e.g., Utility Bill, Rent Agreement)</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure that all documents are clear, valid, and in PDF or image format for upload.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance with document preparation, feel free to reach out to our HR team.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process8")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process9" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory Documents Upload for Mid-level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome aboard! As a mid-level hire, please ensure you have the following mandatory documents ready for upload:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Updated Resume/CV</li>
        <li>Government-issued ID (e.g., Passport, PAN Card, Voter ID)</li>
        <li>Educational Certificates (Degree/Diploma)</li>
        <li>Previous Employment Certificates (Experience Letters)</li>
        <li>Offer Letter/Job Confirmation Letter</li>
        <li>Address Proof (Utility Bill, Rent Agreement)</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Ensure all documents are clear, valid, and saved in PDF or image format for upload.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Feel free to reach out to our HR team if you have any questions or need assistance with document preparation.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process9")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process10" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory Documents Upload for Senior-level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to our team! As a senior-level hire, please ensure you have the following mandatory documents ready for upload:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Updated Resume/CV</li>
        <li>Government-issued ID (e.g., Passport, PAN Card, Aadhaar Card)</li>
        <li>Educational Certificates (Degree/Diploma, Post-Graduation if applicable)</li>
        <li>Previous Employment Certificates (Experience Letters)</li>
        <li>Offer Letter/Job Confirmation Letter</li>
        <li>Professional Certifications (if any)</li>
        <li>Address Proof (Utility Bill, Rent Agreement)</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Ensure all documents are clear, valid, and saved in PDF or image format for upload.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Feel free to contact our HR team if you have any questions or need assistance with document preparation.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process10")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process11" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day Breifing for Entry-level hires</div>
                            
                            
    <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to our team! On your first day, you can expect the following briefing:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Introduction to the Company's Mission and Values</li>
        <li>Overview of Your Role and Responsibilities</li>
        <li>Introduction to Your Team and Key Colleagues</li>
        <li>Office Tour and Facilities Overview</li>
        <li>IT Setup and Equipment Distribution</li>
        <li>Review of Company Policies and Code of Conduct</li>
        <li>Q&A Session to Address Any Initial Questions</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please arrive on time and bring any necessary documents or materials as instructed by the HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We look forward to welcoming you and ensuring a smooth onboarding process!</p>
    </div>

                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process11")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process12" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day Breifing for Mid-level hires</div>
                            
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to our team! On your first day, you can expect the following briefing:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Introduction to the Company's Mission and Values</li>
        <li>Detailed Overview of Your Role and Responsibilities</li>
        <li>Meeting with Your Immediate Team and Key Stakeholders</li>
        <li>Office Tour and Facilities Overview</li>
        <li>IT Setup and Equipment Distribution</li>
        <li>Review of Company Policies and Code of Conduct</li>
        <li>Discussion on Project Assignments and Goals</li>
        <li>Q&A Session to Address Any Initial Questions</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please arrive on time and bring any necessary documents or materials as instructed by the HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We're excited to have you join our team and look forward to a successful onboarding process!</p>
    </div>


                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process12")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process13" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day Breifing for Senior-level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to our team! On your first day, you can expect the following briefing:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Introduction to the Company's Mission, Vision, and Values</li>
        <li>Detailed Overview of Your Role, Responsibilities, and Leadership Expectations</li>
        <li>Meetings with Executive Team and Department Heads</li>
        <li>Office Tour and Introduction to Key Facilities</li>
        <li>IT Setup and Specialized Equipment Distribution</li>
        <li>Review of Company Policies, Compliance, and Governance</li>
        <li>Discussion on Strategic Objectives and Initiatives</li>
        <li>Opportunity to Connect with Senior Stakeholders and Peers</li>
        <li>Q&A Session to Address Any Initial Questions</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please arrive on time and bring any necessary documents or materials as instructed by the HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We're thrilled to have you join our team and contribute to our success!</p>
    </div>


                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process13")}}>Complete</div>
                        </div>


                            : null
                        }
{
                            process == "process14" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day checklist for entry level candidates</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Congratulations on your first day! Here's a checklist to help you get started:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Arrive on time and report to the HR department</li>
        <li>Bring your identification documents (e.g., passport, driver's license)</li>
        <li>Complete any remaining paperwork or documentation</li>
        <li>Attend the First-Day Briefing session</li>
        <li>Receive your employee ID badge and access card</li>
        <li>Set up your workstation and IT equipment</li>
        <li>Complete mandatory training modules</li>
        <li>Review company policies and handbook</li>
        <li>Meet your team members and immediate supervisor</li>
        <li>Participate in the office tour</li>
        <li>Get familiar with key facilities and amenities</li>
        <li>Enjoy a welcome lunch or coffee break</li>
        <li>Ask questions and seek assistance as needed</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please feel free to reach out to HR or your supervisor if you have any questions or need further guidance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We're excited to have you join our team and wish you a successful first day!</p>
    </div>

                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process14")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process15" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day checklist for mid level candidates</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome aboard! Here's a checklist to help you get settled on your first day:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Arrive on time and check in with HR for orientation</li>
        <li>Bring any required identification and employment documents</li>
        <li>Complete necessary paperwork and HR forms</li>
        <li>Attend the First-Day Briefing session for mid-level hires</li>
        <li>Receive your employee ID badge and access credentials</li>
        <li>Set up your workstation and IT equipment</li>
        <li>Review company policies, benefits, and procedures</li>
        <li>Meet with your team and key stakeholders</li>
        <li>Participate in training or onboarding sessions specific to your role</li>
        <li>Get familiar with the office layout and facilities</li>
        <li>Connect with your manager to discuss expectations and goals</li>
        <li>Enjoy a welcome lunch or coffee break with colleagues</li>
        <li>Ask questions and seek assistance as needed</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Feel free to reach out to HR or your manager if you have any questions or require additional support.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We're thrilled to have you join our team and wish you a productive and successful first day!</p>
    </div>

                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process15")}}>Complete</div>
                        </div>


                            : null
                        }
{
                            process == "process16" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">First-Day checklist for senior level candidates</div>
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to the team! Here's a comprehensive checklist for your first day:</p>
    </div>

    <ul class="list-disc list-inside mb-4 text-sm text-gray-700">
        <li>Arrive on time and check in with HR for orientation</li>
        <li>Bring all necessary identification and employment documents</li>
        <li>Complete any remaining paperwork and HR forms</li>
        <li>Attend the Senior-Level First-Day Briefing session</li>
        <li>Receive your employee ID badge, access credentials, and welcome kit</li>
        <li>Set up your workstation and specialized equipment</li>
        <li>Review advanced company policies, benefits, and executive procedures</li>
        <li>Meet with executive team members and key stakeholders</li>
        <li>Participate in specialized training or onboarding sessions</li>
        <li>Discuss strategic goals and initiatives with your manager</li>
        <li>Explore the office layout and executive amenities</li>
        <li>Engage in introductory meetings and team-building activities</li>
        <li>Enjoy a welcome lunch or networking session with leadership</li>
        <li>Acquaint yourself with departmental objectives and projects</li>
        <li>Seek mentorship opportunities and establish professional relationships</li>
        <li>Ask questions and provide initial insights based on your expertise</li>
    </ul>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Feel free to reach out to HR or leadership if you have any questions or require further assistance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We're delighted to have you join our senior team and wish you a successful start!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process16")}}>Complete</div>
                        </div>


                            : null
                        }

                        </div>

                    </div>
        </>
    )
}