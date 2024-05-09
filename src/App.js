
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VottingPage from "./Pages/VottingPage";

import './App.css'
import Login from "./Pages/Login";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login />}/>
          <Route path="/dashboard" element={<VottingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
