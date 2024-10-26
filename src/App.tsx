import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {MainPage} from "./pages/MainPage/MainPage";
import {CardPage} from "./pages/CardPage/CardPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage/>}/>
        <Route path={"/post/:cardId"} element={<CardPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
