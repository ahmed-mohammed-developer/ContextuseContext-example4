import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile(){
    const user = useContext(UserContext)

    return(
        <>
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>
        </>
        
    )
}

export default UserProfile