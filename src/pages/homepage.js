import * as React from "react";
import {useParams } from "react-router-dom";
import './styles/homepage.css'; // Tell webpack that Button.js uses these styles
import { Container } from 'react-bootstrap';
import Map from "../components/Map";

// Params will not be used for this.
// We need to do a database call here, and update the tables accordingly

function Homepage(){
    const params = useParams();
    console.log(params);

    return(
        <Container>
            <br/>
            <h2>
                Quick facts!
            </h2>

            <h5 id="stats-div">
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
            <div>
                <h5> Find yourself</h5>
                <div id="app-cover">
                    <div class="row">
                        <div class="toggle-button-cover">
                        <div class="button-cover">
                            <div class="button r" id="button-3">
                            <input type="checkbox" class="checkbox" />
                            <div class="knobs"></div>
                            <div class="layer"></div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2> Leaderboard </h2>
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

            <div id="homepage-map">
                <h2> Locations of other ESW Arcade Games! </h2>
                <Map/>
            </div>
        </Container>
    );
};

export default Homepage;