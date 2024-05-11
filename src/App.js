
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VottingPage from "./Pages/VottingPage";

import React, {useEffect, useState} from 'react'
import { contractAbi, contractAddress } from "./Constant/constant";

import { ethers } from "ethers";


import './App.css'
import Login from "./Pages/Login";

function App() {

  const [provider, setProvider] = useState(null)
  const [isConnected, setIsConnected] = useState(false);
  const { ethers } = require("ethers");
  
    const connectWallet = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);
          await provider.send("eth_requestAccounts", []);
          const signer = provider.getSigner();
          const address = await signer.getAddress();

          
          // Conditional Logging (Recommended)
          if (address) {
            console.log("Meta marks Connected: " + address);
          } else {
            console.log("Address not yet available.");
          }
    
          setIsConnected(true);
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("MetaMask is not connected!");
      }
    };
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Login connectWallet={connectWallet}/>}/>
          <Route path="/dashboard" element={<VottingPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// 0x28B63F63959E3DE319d2F687D7B662B3c23e1936