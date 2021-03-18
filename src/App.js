import React, { useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginForm from './components/LoginForm';
import './App.css';



function App() {
  const adminUser = {
    email: "AitAdmin@StockBot.com",
    password: "Admin123"

  }
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    }
    else{
      console.log("Details do not match.");
      setError("Details do not match.");
    }

  }

  const Logout = () => {
    console.log("Logout");
    setUser({ 
      name: "", 
      email: "" 
    });
  }

  return (
    <div className="Page">
            <Navbar />
    <div className="App">

      {(user.email != "") ? (
        <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}> Logout </button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}

    </div>
          <Footer />
    </div>
  );
}

export default App;
