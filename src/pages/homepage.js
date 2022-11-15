import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function Homepage(){
    const params = useParams();
    console.log(params);

    return(
        <div>
            <br/>
            <h2>
                Quick facts!
            </h2>

            <h5>
                <div>
                    Number of wins: {params.numWins}
                </div>
                <div>
                    Number of prizes avalible: {params.currentPrizes}
                </div>
                <div>
                    Number of prizes given out: {params.prizesGiven}
                </div>
                <div>
                    Weight of pop can tabs collected: {params.tabWeight}
                </div>
            </h5>

            <br/>
            <br/>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Username</th>
                    <th scope="col">Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>157</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>148</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>109</td>
                    </tr>
                </tbody>
            </table>
            
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

        /**
         * Add in contact details for club so people can sign up
         * Add in info about why we are collecting the pop can tabs
         * Add in locations of the other arcade games
        */
    );
};

export default Homepage;