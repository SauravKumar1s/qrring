import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Otp from "./screens/Otp";
import LoginForm from "./screens/LoginForm";
import OptionSection from "./screens/OptionSection";
import CreateCard from "./screens/CreateCard";
import Profile from "./screens/Profile";
import CreateTapTree from "./screens/CreateTapTree";
import ProfileAllLink from "./screens/ProfileAllLink";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
