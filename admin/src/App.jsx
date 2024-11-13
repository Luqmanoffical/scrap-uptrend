import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Dashboard from './Components/Dashboard/Dashboard';
import Login from './Components/Login/Login';
import Affiliate from './Components/Affiliate/Affiliate';
import Statistics from './Components/Statistics/Statistics';
import Referrals from './Components/Referrals/Referrals';
import Payouts from './Components/Payouts/Payouts';
import Visits from './Components/Visits/Visits';
import Creatives from './Components/Creatives/Creatives';
import Settings from './Components/Settings/Settings';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
      <Layout>
      <Routes>
        <Route  path="/dashboard" element={<Dashboard />}  />
    
        <Route path="/affilate" element={<Affiliate />} />
            <Route path="/statistics" element={<Statistics />} />
            <Route path="/referrals" element={<Referrals />} />
            <Route path="/payouts" element={<Payouts />} />
            <Route path="/visits" element={<Visits />} />
            <Route path="/creatives" element={<Creatives />} />
            <Route path="/settings" element={<Settings />} />
    
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
