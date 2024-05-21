import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import WelcomeService from "../Services/WelcomeService";
import path from "../util/PathSimple.json";
import LinearProgress from '@mui/material/LinearProgress';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
export default function Welcome(){
    const [process,setProcess] = useState("process");
    const [list,setList] = useState([]);
    const [fullProgress,setFullProgress] = useState(0);

    async function processit(v){
        await WelcomeService.process(v);
        setProcess("process");
    }


    async function get_list(){
        let welcome_list = await WelcomeService.status();
        let final_list = [];
        let data = undefined;
        let score = 0;
        let total = 0;
        for(var i of Object.keys(path["welcome"])){
            if(Object.keys(welcome_list).includes(i)){
                data = {
                    "name":i,
                    "desc":path["welcome"][i]["name"],
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
                            process == "process1" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">About Hexaware Technologies</div>
                            
                                <div>Hexaware Technologies is a leading global provider of IT, BPO, and consulting services headquartered in India. Established in 1990, the company has grown significantly over the years to become a trusted partner for digital transformation and technology solutions. Hexaware has a strong presence in India and operates globally with delivery centers in North America, Europe, and Asia Pacific. The company's service offerings span across various industries including banking and financial services, healthcare, insurance, travel, and manufacturing. Hexaware is known for its expertise in emerging technologies such as artificial intelligence, cloud computing, automation, and blockchain. With a focus on innovation and customer-centricity, Hexaware has earned a reputation for delivering high-quality solutions that drive business value for its clients. The company's workforce consists of skilled professionals who are committed to excellence and continuously strive to push the boundaries of technology. Hexaware's commitment to sustainability and social responsibility is reflected in its initiatives to promote diversity, reduce environmental impact, and support community development. Overall, Hexaware Technologies continues to be a key player in the global IT industry, driving innovation and shaping the future of digital transformation.</div>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process1")}}>Complete</div>
                        </div>


                            : null
                        }




{
                            process == "process2" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Chatbot Tips</div>
                            
                            <p>Welcome to our chatbot tips page! Here are some guidelines to help you interact effectively with our chatbot:</p>
    <ol>
        <li><strong>Be Clear and Specific:</strong> Provide clear and specific information or questions to help the chatbot understand your needs accurately. Avoid ambiguous or vague language.</li>
        <li><strong>Use Keywords:</strong> Utilize relevant keywords related to your query to assist the chatbot in identifying the topic quickly and providing accurate responses.</li>
        <li><strong>Ask Direct Questions:</strong> Frame your questions in a direct manner. For example, instead of saying "I need help," try asking "How do I reset my password?"</li>
        <li><strong>Follow Prompts:</strong> If the chatbot provides options or prompts during the conversation, interact with them to guide the conversation and get more targeted assistance.</li>
        <li><strong>Provide Context:</strong> When discussing a specific issue or topic, provide relevant context upfront to help the chatbot offer more personalized and accurate responses.</li>
        <li><strong>Be Patient:</strong> Chatbots are designed to assist efficiently, but sometimes they may need a moment to process information. Be patient and allow the chatbot time to respond.</li>
        <li><strong>Explore Features:</strong> Experiment with different commands or features of the chatbot to discover its full capabilities. You might uncover useful functionalities you didn't know existed!</li>
        <li><strong>Feedback is Welcome:</strong> If you encounter any issues or have suggestions for improvement, feel free to provide feedback. Your input helps us enhance the chatbot's performance.</li>
        <li><strong>Privacy and Security:</strong> Avoid sharing sensitive personal information (e.g., passwords, financial details) with the chatbot. Our chatbot is designed to prioritize your privacy and security.</li>
        <li><strong>Enjoy the Experience:</strong> Interacting with the chatbot should be informative and enjoyable. Feel free to engage in a conversational manner and make the most out of this innovative tool.</li>
    </ol>
    <p>If you have specific questions or need assistance, our chatbot is here to help! Simply start a conversation and let us guide you through your onboarding journey at Hexaware.</p>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process2")}}>Complete</div>
                        </div>


                            : null
                        }





{
                            process == "process3" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Helpline</div>
                            
                            <h1>Need Help? Contact Us!</h1>
    
    <div class="contact-info">
        <p><strong>General Inquiries:</strong> Email us at <a href="mailto:info@example.com">info@example.com</a></p>
        <p><strong>Technical Support:</strong> Call our support team at <a href="tel:+1234567890">+1 (234) 567-890</a></p>
        <p><strong>Customer Service:</strong> Reach out to our customer service team at <a href="tel:+1987654321">+1 (987) 654-321</a></p>
        <p><strong>Business Hours:</strong> Monday to Friday, 9:00 AM - 5:00 PM (EST)</p>
    </div>

    <p>If you have urgent issues or technical difficulties while using our platform, please don't hesitate to contact us using the information provided above. Our team is here to assist you!</p>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process3")}}>Complete</div>
                        </div>


                            : null
                        }

{
                            process == "process4" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Offer Letter</div>
                            
                            
        <h2>Offer of Employment</h2>

        <p>Date: April 25, 2024</p>

        <p>Recipient's Name:<br />
        John Doe<br />
        123 Main Street<br />
        Anytown, USA 12345</p>

        <p>Dear John Doe,</p>

        <p>We are delighted to extend an offer of employment to you for the position of <strong>Software Engineer</strong> at <strong>ABC Technologies</strong>. We believe that your skills and experience will be valuable assets to our team.</p>

        <h3>Position Details:</h3>
        <ul>
            <li><strong>Job Title:</strong> Software Engineer</li>
            <li><strong>Department:</strong> Engineering</li>
            <li><strong>Location:</strong> New York Office</li>
            <li><strong>Employment Type:</strong> Full-time</li>
            <li><strong>Salary:</strong> $80,000 per year</li>
        </ul>

        <h3>Benefits:</h3>
        <p>You will be eligible for the following benefits:</p>
        <ul>
            <li>Health insurance</li>
            <li>Dental and vision coverage</li>
            <li>401(k) retirement plan with company match</li>
            <li>Paid time off and holidays</li>
            <li>Employee stock options</li>
        </ul>

        <h3>Job Responsibilities:</h3>
        <p>In this role, you will be responsible for:</p>
        <ul>
            <li>Designing and developing software applications</li>
            <li>Testing and debugging code</li>
            <li>Collaborating with team members on projects</li>
            <li>Implementing new features and functionalities</li>
        </ul>

        <p>This offer of employment is contingent upon the successful completion of a background check and any other pre-employment requirements.</p>

        <p>If you accept this offer, please sign and return this letter by May 1, 2024, to indicate your acceptance of the terms and conditions outlined herein.</p>

        <p>If you have any questions or need further clarification, please contact me at (123) 456-7890 or email@example.com.</p>

        <p>We look forward to welcoming you to our team!</p>

        <p>Sincerely,</p>
        <p>Jane Smith<br />
        Human Resources Manager<br />
        ABC Technologies</p>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process4")}}>Complete</div>
                        </div>


                            : null
                        }



{
                            process == "process5" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Date of Joining</div>
                            
                            <h2>Date of Joining</h2>

<p>Welcome to our team! Your date of joining is:</p>

<p>May 15, 2024</p>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process5")}}>Complete</div>
                        </div>


                            : null
                        }


{
                            process == "process6" ?

                            


                            <div className="flex flex-col lg:flex-col flex-wrap items-start lg:items-start justify-between">
                            <div className="text-white bg-slate-600 px-4 py-2 rounded-xl border-solid border-2 mb-5 lg:mr-5 items-middle ">Mandatory Documents</div>
                            
                            <h1>Mandatory Documents for Onboarding</h1>

<p>Dear Employee,</p>
<p>Welcome aboard! The following documents are mandatory for your onboarding process:</p>

<ul>
    <li>Aadhaar Card (or any government-issued ID proof)</li>
    <li>PAN Card (for tax purposes)</li>
    <li>Educational Certificates (degree, mark sheets)</li>
    <li>Offer Letter from the employer</li>
    <li>Appointment Letter</li>
    <li>Experience Certificates (if applicable)</li>
    <li>Bank Account Details (for salary credits)</li>
    <li>Address Proof (utility bills, rent agreement)</li>
    <li>Passport-size Photographs</li>
    <li>Medical Reports (if required)</li>
</ul>

<p>Please ensure you have all the above documents ready before your joining date.</p>

<p>Thank you!</p>
                                <div className="px-4 py-2 mt-4 border-solid rounded-xl border-slate-600 border-2 text-slate-600 cursor-pointer" onClick={()=>{processit("process6")}}>Complete</div>
                        </div>


                            : null
                        }


                        </div>

                    </div>
        </>
    )
}