import * as React from "react";
import { useParams } from "react-router-dom";
import './styles/homepage.css'; // Tell webpack that Button.js uses these styles


function Homepage(){
    const params = useParams();
    console.log(params);

    return(
        <div>
            <div className="fact-container">
                <h4>
                    Quick facts!
                </h4>
                <div>
                    <h4>Number of wins: {params.numWins}</h4>
                </div>
                <div>
                    <h4>Number prizes avalible: {params.currentPrizes}</h4>
                </div>
                <div>
                    <h4>Number prizes given out: {params.prizesGiven}</h4>
                </div>
                <div>
                    <h4>Weight of pop can tabs collected: {params.tabWeight}</h4>
                </div>
            </div>

            <h2> Leaderboard </h2>
            

            <br/>
            <br/>
            <div>
                <h2> How to contact us! </h2>
                <h5> Email: </h5>
                <h5> Meeting Details: Thornborough Building, Room 1002 Every Tuesday at 6:00pm</h5>
            </div>

            <div>
                <h2> Locations of other ESW Arcade Games! </h2>
            </div>
        </div>
    );
};

export default Homepage;