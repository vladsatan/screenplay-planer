import './App.css';
import Header from './Components/Header/Header';
import React, { useState } from 'react';


function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
      <Header status={isLogin} changeStatus={setIsLogin} />
    </div>
  );
}

export default App;
