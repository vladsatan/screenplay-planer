import './App.css';
import Header from './Components/Header/Header';
import React, { useState } from 'react';
import CreateProject from './pages/CreateProject/CreateProject';
import { Routes,Route } from 'react-router-dom';
import MyProjects from './pages/MyProjects/MyProjects';
import Settings from './pages/Settings/Settings';


function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header status={isLogin} changeStatus={setIsLogin} />
      <Routes>
        <Route path="/" element={<MyProjects />} />
        <Route path="/createproject" element={<CreateProject />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
