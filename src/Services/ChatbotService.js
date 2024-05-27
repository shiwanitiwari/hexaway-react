import axios from 'axios';
import { OpenAIClient, AzureKeyCredential } from "@azure/openai";
const API = "https://hexaway-backend.azurewebsites.net/chatbot"

class ChatbotService{

    

    async messageb(msg,status){
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

    async message(msg,status){
        const client = new OpenAIClient("https://2000108307-data.openai.azure.com/", new AzureKeyCredential("27874a0175894ca3becf6e6c223aff12"));
        const deploymentId = "gpt-35-turbo";
        const messages = [
            { role: "system", content: "You are a chatbot that helps candidates with their onboarding paths based on role and experience \n" + `roles : technical , non-technical , leadership 
            roles : technical , non-technical , leadership  +\n" +
            "            experience : entry (<2 years) , mid (>=2 years and <=5 years) , senior (>5 years)  +\n" +
            "            The path consists of 5 parts : welcome , pre-onboarding , onboarding , post-onboarding , next-steps +\n" +
            "             +\n" +
            "            welcome consists of :  +\n" +
            "            process1 : about +\n" +
            "            process2 :tips-chatbot +\n" +
            "            process3 :helpline +\n" +
            "            process4 :offer-letter +\n" +
            "            process5 :doj +\n" +
            "            process6 :docs +\n" +
            "             +\n" +
            "             +\n" +
            "            preonboarding consists of : +\n" +
            "             +\n" +
            "            process7 : personal-info (all) +\n" +
            "            process8 : mandatory-docs-entry (entry) +\n" +
            "            process9 : mandatory-docs-mid (mid) +\n" +
            "            process10 : mandatory-docs-senior (senior) +\n" +
            "            process11 : first-day-brief-entry (entry) +\n" +
            "            process12: first-day-brief-mid (mid) +\n" +
            "            process13 : first-day-brief-senior (senior) +\n" +
            "            process14 : first-day-checklist-entry (entry) +\n" +
            "            process15 : first-day-checklist-mid (mid) +\n" +
            "            process16 : first-day-checklist-senior (senior) +\n" +
            "             +\n" +
            "            onboarding consists of: +\n" +
            "             +\n" +
            "            process17 : report-at-hexaware (all) +\n" +
            "            process18 : welcome-call-entry (entry) +\n" +
            "            process19 : hr-orientation-mid (mid) +\n" +
            "            process20 : hr-orientation-senior (senior) +\n" +
            "            process21 : nda (all) +\n" +
            "            process22 : nomination (all) +\n" +
            "            process23 : bank-session (all) +\n" +
            "            process24 : laptop-collection (all) +\n" +
            "            process25 : emp-id-creation (all) +\n" +
            "            process26 : email-creation (all) +\n" +
            "             +\n" +
            "            Post-onboarding consists of: +\n" +
            "             +\n" +
            "            process27 : stationh-reset (all) +\n" +
            "            process28 : o365-reset (all) +\n" +
            "             +\n" +
            "            next-steps consists of: +\n" +
            "             +\n" +
            "            process29 : mandatory-courses-technical (technical all) +\n" +
            "            process30 : mandatory-courses-non-technical (non-technical all) +\n" +
            "            process31 : mandatory-courses-leadership (leadership all) +\n" +
            "            process32 : howto-stationh (all) +\n" +
            "            process33 : howto-tools (all) +\n" +
            "            process34 : tech-support (all) +\n" +
            
            
            
            
            you are a chat bot, and you help user with an application that creates tailored onboarding paths based on role and experience
            above are all the steps involved in the path, always use process name in response like tech-support and not process34
            
            
            example :
            user : what will i require in the mandatory documents.
            assistant: You will require aadhar card, pan card, all semester marksheets if you are an entry level candidate ...` },
            { role: "user", content: "Query = " + msg + " \n My onboarding path status is = " + JSON.stringify(status) + "\n answer in short" }
          ];
          const events = await client.getChatCompletions(deploymentId, messages);
          console.log(status);
          return events.choices[0].message.content;
    }

    






}
export default new ChatbotService();