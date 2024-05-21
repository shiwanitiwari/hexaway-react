import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import UserService from "../Services/UserService";


export default function Navbar(props){
    const navigate = useNavigate();

    function logOut(){
        UserService.logout();
        navigate("/");

    }
    return (
    <div className="flex flex-row items-center justify-between px-2 bg-slate-600">
    <div className="section-1-heading text-white text-2xl lg:text-4xl tracking-[1rem] my-4 font-thin font-roboto text-center">
                        <a href='/'><i>H</i>EXAWAY</a>
                    </div>


    {props.hr === true ? 
    
    
        <div className='flex flex-column'></div>
    
    : null}
    {
        props.login === true ? <LogoutIcon onClick={logOut} className='text-white'/> : null
    }
    
    
    </div>
    );
}