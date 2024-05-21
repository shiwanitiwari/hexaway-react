
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import WelcomeService from '../Services/WelcomeService';
import PreonboardingService from '../Services/PreonboardingService';
import OnboardingService from '../Services/OnboardingService';
import PostonboardingService from '../Services/PostonboardingService';
import NextstepsService from '../Services/NextstepsService';
import ChatbotService from "../Services/ChatbotService"
import { maxHeight } from '@mui/system';
export default function Chatbot(){
    const [open,setOpen] = useState(false);
    const [msg,setMsg] = useState("");
    const [list,setList] = useState([]);

    async function chat(){

        console.log("s1")
        list.push("You >> " + msg);
        setList([...list]);

        let list1 = await WelcomeService.status();
        let list2 = await PreonboardingService.status();
        let list3 = await OnboardingService.status();
        let list4 = await PostonboardingService.status();
        let list5 = await NextstepsService.status();
        const status = {
            "welcome" : list1,
            "pre-onboarding" : list2,
            "onboarding" : list3,
            "post-onboarding" : list4,
            "next-steps" : list5
        }
        var m = msg;
        setMsg("");

        let resp = await ChatbotService.message(m,status);
        console.log(resp);        
        list.push("Chatbot >> " + resp);
        console.log(resp);        
        setList([...list]);
        
    }
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
    return (
        <div>
        <div className="fixed bottom-5 right-5 p-5 rounded-full bg-slate-600" onClick={()=>setOpen(true)}>
            <MarkUnreadChatAltIcon className='text-white cursor-pointer' />
        </div>
        <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
                <div className='flex flex-col align-start justify-start lg:h-96 h-56 my-5 min-w-full overflow-y-scroll border-solid'>
                    {
                        list.map((v)=>(
                            <div className='px-3 py-2 text-sm bg-slate-600 text-white rounded-xl mb-1'>{v}</div>
                        ))
                    }
                </div>
          <input value={msg} className='rounded-xl border-solid border-2 px-4 py-2 border-slate-600 my-2 w-full' type="text" name="" id="" onChange={e=>setMsg(e.target.value)} placeholder='Type your message here'/>
          <button className='w-full bg-slate-600 text-white rounded-xl px-4 py-2' onClick={chat}>Send</button>
          
        </Box>
      </Modal>
      </div>
    )

}