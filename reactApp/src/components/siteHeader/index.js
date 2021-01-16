import React, { useContext } from "react";
import "./siteHeader.css";
import 'semantic-ui-css/semantic.min.css'
// import { Sticky } from 'semantic-ui-react'
import { AuthContext } from "../../contexts/authContext";

import LoggedIn from "./loggedIn";
import LoggedOut from "./loggedOut";

export default function SiteHeader() {

  const context = useContext(AuthContext);
 
  return context.isAuthenticated ? (
    
  //When logged in
    //<Sticky>
      <LoggedIn />
    //</Sticky>

  ) : (

  //When logged out
    //<Sticky>
      <LoggedOut />
    //</Sticky>
    
  );
};