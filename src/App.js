import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar"; 
import Footer from  "./components/Footer/Footer";
import LoginForm from './components/LoginForm';
import './App.css';



function App() {
  const adminUser = {
    email: "AitAdmin@StockBot.com",
    password: "Admin123" 

  }
  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

const Login = details => {
  console.log(details);
}

const Logout = () => {
  console.log("Logout");
}

  return (
    <div className="App">
      <Navbar />
      {(user.email !="") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button> Logout </button>
          </div>
      ) : ( 
        <LoginForm />
      )}
      <Footer />
    </div>
  );
}

export default App;
