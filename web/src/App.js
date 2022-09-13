import logo from './logo.svg';
import './App.css';
import './components/Greetings'
import React, { useState } from 'react'
import { Button, TextField, Grid } from "@mui/material";
import {Route, Routes, Link} from "react-router-dom";
import About from "./components/About";
import Greeting from "./components/Greetings";
import {useNavigate} from "react-router";
import Giraffe from "./components/Giraffe"

function App() {
    const [username, setUsername] = useState("Mikkel");
    let navigate = useNavigate();
  return (
    <div className="App">
        <Routes>
            <Route path={"/about/:text"} element={<About />} />
            <Route path={"/"} element={<h1>Startside</h1>} />
            <Route path={"/Greetings"} element={<Greeting username={"Mikkel"} />} />
            <Route path={"giraffe"} element={<Giraffe />} />
            <Route path={"*"} element={<h1>420 Blaze it</h1>} />
        </Routes>
        <Link to="about/link">Go to About</Link>
        <Grid container direction={"column"} spacing={2}>
            <Grid item xs={6} md={8}>
                <TextField className="font-text">Hello, {username}</TextField>
                <TextField className="no-text">Hello, {username}</TextField>
            </Grid>
            <Grid item xs={6} md={4}>
                <Button variant="contained" onClick={(e)=>setUsername("Johnny")}>Skift navn </Button>
            </Grid>
        </Grid>
    </div>
  );
}

export default App;
