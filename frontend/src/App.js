import { HashRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/hero";
import AI from "./components/ai";
import Analytics from "./components/analytics";
import Extra from "./components/extra";
import Users from "./components/users";
import Login from "./components/login";
import Admin from "./components/admin";
import AdminAnalytics from "./components/adminanalytics";
import AdminAI from "./components/adminAI";
import Home from "./components/spline";
import Menu from "./components/menu";
import EventServices from "./components/event";
import Profile from "./components/profile";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Hero />} />
        <Route path="/student-dashboard" element={<Hero />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/users" element={<Users />} />
        <Route path="/spline" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event" element={<EventServices />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-analytics" element={<AdminAnalytics />} />
        <Route path="/admin-ai" element={<AdminAI />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
