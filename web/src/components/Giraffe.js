import React, {useState} from "react";
import {giraffeStore} from "../stores/GiraffeStore";
import {Grid } from "@mui/material";
import {observer} from "mobx-react-lite";

const Giraffe = () => {
    const [name, setName] = useState("");


    return (
        <Grid container direction={"column"}>
            <Grid item>
                <ul>
                    {giraffeStore.giraffes.map((name, key)=>
                        <li key={key}>{name}</li>
                    )}
                </ul>
            </Grid>
        </Grid>
    )
};

export default observer(Giraffe);