import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import NextstepsService from "../Services/NextstepsService";
import path from "../util/PathSimple.json";
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
export default function Nextsteps(){
    const [process,setProcess] = useState("process");
    const [list,setList] = useState([]);
    const [fullProgress,setFullProgress] = useState(0);

    async function processit(v){
        await NextstepsService.process(v);
        setProcess("process");
    }


    async function get_list(){
        let welcome_list = await NextstepsService.status();
        let final_list = [];
        let data = undefined;
        let score = 0;
        let total = 0;
        for(var i of Object.keys(path["nextsteps"])){
            if(Object.keys(welcome_list).includes(i)){
                data = {
                    "name":i,
                    "desc":path["nextsteps"][i]["name"],
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
                            process == "process29" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory courses for technical roles</div>
                            
                            
    <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding as a technical role at Hexaware, you are required to complete the following mandatory courses:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Introduction to Hexaware Systems</li>
            <li>Technical Skills Development Workshop</li>
            <li>Information Security and Compliance Training</li>
            <li>Code of Conduct and Ethics</li>
            <li>Product and Service Training</li>
            <li>Company Policies and Procedures Overview</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">These courses are designed to equip you with the necessary knowledge and skills to excel in your technical role and align with Hexaware's standards and practices.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure that you complete these mandatory courses within the specified timeframe and reach out to your manager or HR representative if you have any questions or need assistance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your commitment to continuous learning and development as a valued member of our technical team.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process29")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process30" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory courses for non-technical roles</div>
                            
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding in a non-technical role at Hexaware, you are required to complete the following mandatory courses:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Introduction to Hexaware Systems</li>
            <li>Customer Service Excellence</li>
            <li>Company Policies and Procedures Overview</li>
            <li>Code of Conduct and Ethics</li>
            <li>Product and Service Training</li>
            <li>Health and Safety Training</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">These courses are designed to provide you with the necessary knowledge and skills to excel in your non-technical role and align with Hexaware's standards and practices.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure that you complete these mandatory courses within the specified timeframe and reach out to your manager or HR representative if you have any questions or need assistance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your commitment to continuous learning and development as a valued member of our team.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process30")}}>Complete</div>
                        </div>


                            : null
                        }
{
                            process == "process31" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory courses for leadership roles</div>
                            
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding in a leadership role at Hexaware, you are required to complete the following mandatory courses:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Leadership Essentials and Principles</li>
            <li>Strategic Planning and Execution</li>
            <li>Organizational Culture and Change Management</li>
            <li>Ethical Leadership and Governance</li>
            <li>Finance and Budget Management</li>
            <li>Performance Management and Employee Development</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">These courses are designed to provide you with the necessary knowledge and skills to excel in your leadership role and align with Hexaware's strategic objectives and values.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure that you complete these mandatory courses within the specified timeframe and reach out to your manager or HR representative if you have any questions or need assistance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your commitment to continuous learning and development as a leader at Hexaware.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process31")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process32" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Station-h tutorial</div>
                            
                            
                          
    <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to the Station-h tutorial! Station-h is our system for managing passwords and access credentials.</p>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Resetting Passwords</h2>
        <p class="text-sm text-gray-700">To reset your password on Station-h:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Go to the Station-h login page.</li>
            <li>Click on the "Forgot Password" link.</li>
            <li>Follow the instructions to verify your identity.</li>
            <li>Create a new password following the specified requirements.</li>
            <li>Login using your new password.</li>
        </ol>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Accessing Resources</h2>
        <p class="text-sm text-gray-700">Station-h provides access to various resources:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Email and communication tools</li>
            <li>Internal applications and portals</li>
            <li>Security and authentication services</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you encounter any issues or need further assistance with Station-h, please reach out to your IT support team or contact the helpdesk.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for completing the Station-h tutorial. We hope you find it useful in managing your access and passwords effectively.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process32")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process33" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Security & Compliance information</div>
                            
                            
                          
                            <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Password Security</h2>
        <p class="text-sm text-gray-700">For security reasons, it's important to:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Use strong and unique passwords for all accounts.</li>
            <li>Avoid sharing passwords with anyone.</li>
            <li>Regularly update passwords and enable multi-factor authentication (MFA) where available.</li>
        </ul>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Data Privacy</h2>
        <p class="text-sm text-gray-700">We take data privacy seriously:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Access and use company data responsibly and in compliance with privacy regulations.</li>
            <li>Avoid unauthorized sharing or transmission of sensitive information.</li>
            <li>Report any security incidents or data breaches immediately to the IT security team.</li>
        </ul>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Compliance Policies</h2>
        <p class="text-sm text-gray-700">Adhere to company policies and regulations:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Follow IT security guidelines and best practices.</li>
            <li>Complete mandatory security training and awareness programs.</li>
            <li>Respect intellectual property rights and licensing agreements.</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">As a new hire, it's important to familiarize yourself with our security and compliance policies to ensure a secure and compliant work environment. If you have any questions or need assistance, please contact the IT security team or your supervisor.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in maintaining the security and integrity of our systems and data.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process33")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process34" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Tech Support Information</div>
                            
                            
                          
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to our organization! Here's how you can reach tech support:</p>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Contact Information</h2>
        <p class="text-sm text-gray-700">For technical assistance or IT support, please contact:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Email: <a href="mailto:support@example.com" class="text-blue-500">support@example.com</a></li>
            <li>Phone: <a href="tel:+1234567890" class="text-blue-500">+1 (234) 567-890</a></li>
        </ul>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Helpdesk Portal</h2>
        <p class="text-sm text-gray-700">You can also submit a support ticket through our online helpdesk portal:</p>
        <p class="text-sm text-gray-700"><a href="https://helpdesk.example.com" class="text-blue-500">https://helpdesk.example.com</a></p>
    </div>

    <div class="mb-4">
        <h2 class="text-lg font-semibold mb-2">Availability</h2>
        <p class="text-sm text-gray-700">Our tech support team is available during regular business hours:</p>
        <p class="text-sm text-gray-700">Monday to Friday, 9:00 AM - 6:00 PM (local time)</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you encounter any technical issues, have questions about systems or tools, or need assistance with onboarding tasks, please don't hesitate to reach out to our tech support team. We're here to help!</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for joining our team. We look forward to assisting you with any technical needs you may have.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process34")}}>Complete</div>
                        </div>


                            : null
                        }
                        </div>

                    </div>
        </>
    )
}