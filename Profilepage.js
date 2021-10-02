import React from "react";
import useStyles from './profilestyle';
import Profile from "./profile";
function ProfilePage() {
    const classes = useStyles();
    return ( 
        <div className={classes.Page} >
        <Profile/>    
        </div>
      );
}

export default ProfilePage;