import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Homepage from './pages/homepage.js';
import UserPage from './pages/userPage.js';

const App = () => {
  return (
    <div>
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
