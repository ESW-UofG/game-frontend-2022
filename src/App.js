import './App.css';
import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Homepage from './pages/homepage.js';
import UserPage from './pages/userPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
      <div className='image-container'>
        <img className="header-image" src={require("./images/horizontal_ESW_Logo.png")} alt="ESW logo"/>
      </div>
      <h1>Welcome to the ESW's scoreboard server!</h1>
      <section className="App">
        <Routes>
          <Route exact path="/" element={<Homepage/>} />
          <Route exact path="/plinko_game/:userId" element={<UserPage/>} />
        </Routes>
      </section>
    </div>
  );
};
export default App;
