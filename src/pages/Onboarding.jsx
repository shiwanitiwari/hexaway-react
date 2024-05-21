import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import OnboardingService from "../Services/OnboardingService";
import path from "../util/PathSimple.json";
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
export default function Onboarding(){
    const [process,setProcess] = useState("process");
    const [list,setList] = useState([]);
    const [fullProgress,setFullProgress] = useState(0);

    async function processit(v){
        await OnboardingService.process(v);
        setProcess("process");
    }


    async function get_list(){
        let welcome_list = await OnboardingService.status();
        let final_list = [];
        let data = undefined;
        let score = 0;
        let total = 0;
        for(var i of Object.keys(path["onboarding"])){
            if(Object.keys(welcome_list).includes(i)){
                data = {
                    "name":i,
                    "desc":path["onboarding"][i]["name"],
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
                            process == "process17" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Report @ Hexaware</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to Hexaware! The first step of your onboarding journey is to report at our designated location.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Key details for your reporting:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Date: October 15, 2024</li>
            <li>Time: 9:00 AM</li>
            <li>Location: Hexaware Office, 123 Main Street, City, Country</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure to bring the following documents and items:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Government-issued ID (e.g., Passport)</li>
            <li>Offer letter and appointment order</li>
            <li>Completed pre-onboarding forms</li>
            <li>Notebook and pen for taking notes</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Upon arrival, you will be greeted by our onboarding team and guided through the next steps of your orientation process.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance, feel free to contact our HR department in advance.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We look forward to welcoming you to the Hexaware family!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process17")}}>Complete</div>
                        </div>


                            : null
                        }
{
                            process == "process18" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Welcome call for entry level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Hello and welcome to Hexaware!</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We are excited to have you on board as part of our team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">During the welcome call, we will:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Introduce you to key members of your team and provide an overview of your role and responsibilities.</li>
            <li>Review important company policies and procedures.</li>
            <li>Answer any questions you may have about the onboarding process or your new role.</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure you are available for the scheduled call at the specified time.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any concerns or need further assistance, feel free to reach out to our HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We look forward to connecting with you soon!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process18")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process19" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">HR Orientation for mid level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to Hexaware and congratulations on joining our team as a mid-level hire!</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">The HR orientation session is designed to:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Provide an overview of Hexaware's culture, values, and mission.</li>
            <li>Review important company policies, benefits, and employee resources.</li>
            <li>Discuss career development opportunities and advancement pathways.</li>
            <li>Address any specific questions or concerns you may have about your role or our organization.</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure you attend the scheduled HR orientation session at the specified time.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you require further information or assistance prior to the session, feel free to reach out to our HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We are excited to support you in your career journey at Hexaware!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process19")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process20" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">HR Orientation for senior level hires</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to Hexaware and congratulations on joining our team as a senior-level hire!</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">The HR orientation session for senior-level hires aims to:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Provide an in-depth understanding of Hexaware's organizational structure, leadership, and strategic goals.</li>
            <li>Review advanced company policies, executive benefits, and leadership resources.</li>
            <li>Discuss high-level career development opportunities and executive leadership pathways.</li>
            <li>Address specific questions or concerns related to your role, responsibilities, and executive onboarding.</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please ensure you attend the scheduled HR orientation session at the specified time.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you require further information or assistance prior to the session, feel free to reach out to our HR team.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">We are thrilled to welcome you as a key leader in our organization and look forward to supporting your success at Hexaware!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process20")}}>Complete</div>
                        </div>


                            : null
                        }



{
                            process == "process21" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">NDA form signing</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">Welcome to Hexaware and congratulations on joining our team as a senior-level hire!</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you are required to review and sign our Non-Disclosure Agreement (NDA).</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">The NDA ensures the confidentiality of sensitive company information and protects our intellectual property.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please follow these steps to complete the NDA form:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Read through the NDA document carefully to understand the terms and conditions.</li>
            <li>Fill out any required fields or sections in the form.</li>
            <li>Electronically sign the document using the provided digital signature tool.</li>
            <li>Submit the signed NDA form through the designated platform or portal.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding the NDA, please reach out to our HR or legal department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in maintaining confidentiality and upholding our company's policies.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process21")}}>Complete</div>
                        </div>


                            : null
                        }



{
                            process == "process22" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Nomination form signing</div>
                            
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you are required to review and sign our Nomination Form.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">The Nomination Form captures important details for your official records and administrative purposes.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please follow these steps to complete the Nomination Form:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Review the Nomination Form to ensure all information is accurate and complete.</li>
            <li>Fill out any required fields or sections in the form.</li>
            <li>Electronically sign the document using the provided digital signature tool.</li>
            <li>Submit the signed Nomination Form through the designated platform or portal.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding the Nomination Form, please contact our HR department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in completing the Nomination Form promptly.</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process22")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process23" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Bank session for salary account</div>
                            
                            
    <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you will attend a bank session to set up your salary account.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please prepare the following documents for the bank session:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Valid government-issued identification (e.g., Aadhar Card, PAN Card)</li>
            <li>Address proof (e.g., utility bill, rental agreement)</li>
            <li>Offer letter or appointment letter from Hexaware</li>
            <li>Any other documents required by the bank</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">During the bank session, you will:</p>
        <ul class="list-disc list-inside text-sm text-gray-700">
            <li>Complete the necessary paperwork to open your salary account.</li>
            <li>Receive your account details and debit card.</li>
            <li>Get information about banking services and benefits.</li>
        </ul>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding the bank session, please contact our HR department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in setting up your salary account. We look forward to welcoming you to the team!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process23")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process24" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Laptop/Asset Collection</div>
                            
                            
   
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you will need to collect your laptop or other assigned assets.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please follow these steps to collect your laptop or asset:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Check your email or onboarding portal for instructions on when and where to collect your laptop.</li>
            <li>Bring your official identification and any required paperwork (e.g., offer letter, ID proof).</li>
            <li>Visit the designated location at the specified time to collect your laptop or asset.</li>
            <li>Inspect the laptop or asset for any damages and report issues to the IT support team if needed.</li>
            <li>Sign any acknowledgment or receipt for receiving the laptop or asset.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding laptop or asset collection, please contact our IT or HR department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in collecting your laptop or asset. We hope it serves you well in your role at Hexaware!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process24")}}>Complete</div>
                        </div>


                            : null
                        }
{
                            process == "process25" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Employee Id creation</div>
                            
                            
   
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you will receive your Employee ID.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please follow these steps to obtain your Employee ID:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Ensure all required pre-onboarding tasks, including personal information and mandatory documents, are completed.</li>
            <li>Visit the HR or IT department to request your Employee ID.</li>
            <li>Provide your official identification and any necessary paperwork (e.g., offer letter, ID proof).</li>
            <li>Receive your Employee ID card or details from the HR or IT team.</li>
            <li>Keep your Employee ID secure and use it for access and identification within Hexaware.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding Employee ID creation, please contact our HR or IT department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for your cooperation in obtaining your Employee ID. We look forward to welcoming you as part of our team!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process25")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process26" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">E-mail creation</div>
                            
                            
   
                            <div class="mb-4">
        <p class="text-sm text-gray-700">As part of your onboarding process at Hexaware, you will be provided with a company email address.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Please follow these steps to set up your company email:</p>
        <ol class="list-decimal list-inside text-sm text-gray-700">
            <li>Ensure all required pre-onboarding tasks, including personal information and mandatory documents, are completed.</li>
            <li>Visit the IT department or designated portal to request email creation.</li>
            <li>Provide your Employee ID and any necessary information to verify your identity.</li>
            <li>Choose a suitable email address (if applicable) and set up your password.</li>
            <li>Access your company email account and familiarize yourself with its features.</li>
        </ol>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">If you have any questions or need assistance regarding email creation, please contact our IT department.</p>
    </div>

    <div class="mb-4">
        <p class="text-sm text-gray-700">Thank you for completing the email creation process. We hope you enjoy using your company email for communication and collaboration!</p>
    </div>
                                    <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process26")}}>Complete</div>
                        </div>


                            : null
                        }
                        </div>

                    </div>
        </>
    )
}