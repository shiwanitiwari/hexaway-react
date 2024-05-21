import axios from 'axios';
const API = "https://hexaway-backend.azurewebsites.net/user/"

class UserService{

    isLoggedIn(){
        let token = localStorage.getItem("id");
        let role = localStorage.getItem("role");
        if (token && role){
            return true;
        }
        else{
            return false;
        }
    }
    
    isCandidate(){
        let role = localStorage.getItem("role");
        if (role=="CANDIDATE"){
            return true;
        }
        else{
            return false;
        }
    }

    isHr(){
        let role = localStorage.getItem("role");
        if (role=="HR"){
            return true;
        }
        else{
            return false;
        }
    }


    async login(data){
        const URL = API + "login";
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        try{
        let response = await axios.post(URL,data,HEADER);
        if (response.status == 200){
            let token = response.data.id;
            let role = response.data.role;
            localStorage.setItem("id",token);
            localStorage.setItem("role",role);
            return role;
        }
        else{
            return "";
        }
    }
    catch{
        return "";
    }
    }

    logout(){
        localStorage.clear();
    }

    async register(data){
        const URL = API + "register";
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        return await axios.post(URL,data,HEADER);
    }







}
export default new UserService();