import React from "react";
const log = console.log;

const ProfileComponent = (Props) => {
    // log(typeof Props);
    // const userDetails = [];
 

    return(
        <div>
            <h3>Profile Component</h3>
            <ul>
                <li>Name: {Props.Name}</li>
                <li>Age: {Props.Age}</li>
                <li>Profession: {Props.Profession}</li>
            </ul>
        </div>
    );

}

export default ProfileComponent;