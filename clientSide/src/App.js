import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Chat from './components/chat/Chat';
import Join from './components/join/Join';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/chat' element={<Chat />}></Route>
        <Route path='/' exact element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
