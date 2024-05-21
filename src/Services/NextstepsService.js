import axios from 'axios';
const API = "https://hexaway-backend.azurewebsites.net/nextstep/"

class NextstepsService{

    

    async status(){
        const URL = API + "status?id=" + localStorage.getItem("id");
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        try{
        let response = await axios.get(URL,HEADER);
        if (response.status == 200){
            return response.data;
        }
        else{
            return [];
        }
    }
    catch{
        return [];
    }
    }
    async process(p){
        const DATA = {
            "id" : localStorage.getItem("id")
        }
        const URL = API + "/" + p;
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        try{
        let response = await axios.post(URL,DATA,HEADER);
        if (response.status == 200){
            return response.data;
        }
        else{
            return [];
        }
    }
    catch{
        return [];
    }
    }
}
export default new NextstepsService();