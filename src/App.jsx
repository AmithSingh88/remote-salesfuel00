import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Dashboard from './pages/aDashboard/Dashboard';
import Knowledge from './pages/bKnowledge/Knowledge';
import Members from './pages/cMembers/Members';
import Teams from './pages/dTeams/Teams';
import Vault from './pages/eVault/Valut';
import Chat from './pages/fChat/Chat';
import Settings from './pages/gSettings/Settings';
import Company from './pages/hCompany/Company';
import MyProfile from './pages/iMyprofile/MyProfile';

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>

        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/' element={<Knowledge />} />

        <Route path='/members' element={<Members />} />

        <Route path='/teams' element={<Teams />} />

        <Route path='/vault' element={<Vault />} />

        <Route path='/chat' element={<Chat />} />

        <Route path='/settings' element={<Settings />} />

        <Route path='/company' element={<Company />} />

        <Route path='/myprofile' element={<MyProfile />} />

      </Routes>

    </div>
  );
}

export default App;
