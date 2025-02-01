import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hero from './components/hero';
import Hero from './components/hero'; // Example component
import AI from './components/ai';
import Analytics from './components/analytics';
import Extra from './components/extra';
import Users from './components/users';
import Login from './components/login';
import Gsap from './components/dash';
import Home from './components/spline';
import Menu from './components/menu';
import EventServices from './components/event';
import Profile from './components/profile';
import Admin from './components/admin';
import AdminAnalytics from './components/adminanalytics';
import AdminAI from './components/adminAI';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Hero />} />
        <Route path="/" element={<Login  />} />

        <Route path="/student-dashboard" element={<Hero />} />
        <Route path="/admin-dashboard" element={<Admin />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/extra" element={<Extra />} />
        <Route path="/users" element={<Users />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/spline" element={<Home />} /> 
        <Route path="/menu" element={<Menu />} /> 
        <Route path="/event" element={<EventServices />} /> 
        <Route path="/ha" element={<Profile />} /> 
        <Route path="/admin-analytics" element={<AdminAnalytics />} /> 
        <Route path="/admin-ai" element={<AdminAI />} /> 
        
       
      </Routes> 
     


    </BrowserRouter>
    
  );
}

export default App;
