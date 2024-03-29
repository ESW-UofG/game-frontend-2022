import './pages/styles/app.css';
import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage.js';
import UserPage from './pages/userPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="mainDiv">
      <img
        src={require("./images/horizontal_ESW_Logo.png")}
        style={{width: '50%', textAlign: 'center'}}
        alt="ESW Guelph Logo"
      />
      <h1>Welcome to the ESW's scoreboard server!</h1>
      <section className="App">
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route path="/plinko_game/:userId/*" element={<UserPage/>} />
        </Routes>
      </section>
    </div>
  );
};
export default App;
