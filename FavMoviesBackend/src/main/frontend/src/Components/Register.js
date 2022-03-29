import { Button, CardContent, TextField, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { textAlign } from "@mui/system";
import { useState } from "react";
import axios from "axios";
import User from "../Objects/User";

function registerUser(username, password, fname, lname, email){
    const user = new User(username, password, fname, lname, email)
    const data = JSON.stringify(user);
    var config = {
        method: 'post',
        mode: 'cors',
        url: 'https://favmovieslistproj.herokuapp.com/users',
        headers: { 'Content-Type': 'Application/JSON'},
        data: data
      };
      
      axios(config)
      .then(function (response) {
        
      })
      .catch(function (error) {
        console.error(error);
      });
}

function Register() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    return ( 
        <div>
            <Card sx={{width: "30%"}} variant="outlined">
                <CardContent>
                    <Typography>Register</Typography>
                    <TextField error={username.length < 10} id="username" label="Username" variant="outlined" margin="dense" onChange={(e) => setUsername(e.target.value)}/><tr/>
                    <TextField id="password" label="Password" variant="outlined" type="password" margin="dense" onChange={(e) => setPassword(e.target.value)}/><tr/>
                    <TextField id="fname" label="First Name" variant="outlined" margin="dense" onChange={(e) => setFname(e.target.value)}/><tr/>
                    <TextField id="lname" label="Last Name" variant="outlined"  margin="dense" onChange={(e) => setLname(e.target.value)}/><tr/>
                    <TextField id="email" label="Email Address" variant="outlined" margin="dense" onChange={(e) => setEmail(e.target.value)}/><tr/>
                    <Button variant="outlined" onClick={() => registerUser(username, password, fname, lname, email)}>Register</Button>
                </CardContent>
            </Card>
        </div>
     );
}

export default Register;