import React from "react";
import {useParams} from "react-router";

const About = () => {
    let {text} = useParams();
    return (
        <div>
            <h1>About {text}</h1>
        </div>
    );
};

export default About;