import * as React from "react";
import { Routes, Route, useParams } from "react-router-dom";

function UserPage(){
    const params = useParams();
    console.log(params);
  
    return(
      <div>
         <h2>
          Your win Hash is: {params.userId}
        </h2>
  
        <br/>
        <h4>Enter your email below to claim your points!</h4>
        {/* Sends url info to the server. */}
        <form>
          <label for="email">Please enter your email: </label>
          <input type="email" id="email" name="email"></input>
        </form>
      </div>
    );
  };

  export default UserPage;