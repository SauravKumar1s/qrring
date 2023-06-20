import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Otp from "./screens/Otp";
import LoginForm from "./screens/LoginForm";
import OptionSection from "./screens/OptionSection";
import CreateCard from "./screens/CreateCard";
import Profile from "./screens/Profile";
import CreateTapTree from "./screens/CreateTapTree";
import ProfileAllLink from "./screens/ProfileAllLink";
import SuccessPopup from "./components/atoms/popup/SuccessPopup";
import SuccessPopupSafty from "./components/atoms/popup/SuccessPopupSafty";
import SuccessPopupTapTree from "./components/atoms/popup/SuccessPopupTapTree";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/option-section" element={<OptionSection />} />
        <Route path="/create-card" element={<CreateCard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-taptree" element={<CreateTapTree />} />
        <Route path="/profile-all-link" element={<ProfileAllLink />} />
        <Route path="/success" element={<SuccessPopup />} />
        <Route path="/success-safty" element={<SuccessPopupSafty />} />
        <Route path="/success-taptree" element={<SuccessPopupTapTree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
