import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './styles/Neo.css';
import HrDashboard from "./pages/HrDashboard";
import Footer from "./components/Footer";
import CandidateDashboard from "./pages/CandidateDashboard";
import Welcome from "./pages/Welcome";
import PreOnboarding from "./pages/PreOnboarding";
import Onboarding from "./pages/Onboarding";
import PostOnboarding from "./pages/PostOnboarding";
import Nextsteps from "./pages/Nextsteps";
import Chatbot from "./components/Chatbot";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route exact path="/welcome" element={<Welcome/>} />
        <Route exact path="/preonboarding" element={<PreOnboarding/>} />
        <Route exact path="/onboarding" element={<Onboarding/>} />
        <Route exact path="/postonboarding" element={<PostOnboarding/>} />
        <Route exact path="/nextsteps" element={<Nextsteps/>} />

          <Route exact path="/candidatedashboard" element={<CandidateDashboard/>} />
            <Route exact path="/hrdashboard" element={<HrDashboard/>} />
            <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    <Chatbot />
    </>
  )
}

export default App
