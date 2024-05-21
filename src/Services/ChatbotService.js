import axios from 'axios';
const API = "https://hexaway-backend.azurewebsites.net/chatbot"

class ChatbotService{

    

    async message(msg,status){
        const URL = API;
        const DATA = {
            "message":msg,
            "status":JSON.stringify(status),
        }
        const HEADER = {'headers': {'Content-Type': 'application/json'}};
        try{
        let response = await axios.post(URL,DATA,HEADER);
        if (response.status == 200){
            return response.data;
        }
        else{
            return "Error";
        }
    }
    catch{
        return "Error";
    }
    }

    






}
export default new ChatbotService();