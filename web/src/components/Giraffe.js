import React from "react";
import {giraffeStore} from "../stores/GiraffeStore";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {observer} from "mobx-react-lite";

const Giraffe = () => {
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <ul>
                    {giraffeStore.giraffes.map((name, key)=>
                        <li key={key}>{name}</li>
                    )}
                </ul>
            </Grid>
            <Grid item>
                <Button onClick={() => giraffeStore.addGiraffe("eLMER")}>Tilføj eLMER </Button>
            </Grid>
        </Grid>
    )
};

export default observer(Giraffe);