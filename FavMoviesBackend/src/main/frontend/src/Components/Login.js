import { Button, CardContent, TextField, Typography } from "@mui/material";
import { Card } from "@mui/material";
import { textAlign } from "@mui/system";
import { useState } from "react";
import axios from "axios";

const url = "database-1.cg1nz60tpaa5.us-east-1.rds.amazonaws.com:3306"
const urlUsername = "admin"
const urlPass = "DemonSlayer$^46"

async function loginUser() {
    var config = {
        method: 'get',
        //mode: 'cors',
        url: 'https://cors-anywhere.herokuapp.com/http://database-1.cg1nz60tpaa5.us-east-1.rds.amazonaws.com:3306/users',
        headers: {},
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    loginUser();
    return ( 
        <div>
            <Card sx={{width: "30%"}} variant="outlined">
                <CardContent>
                    <Typography>Login</Typography>
                    <TextField error={username.length < 10} id="username" label="Username" variant="outlined" margin="dense" onChange={(e) => setUsername(e.target.value)}/><tr/>
                    <TextField id="password" label="Password" variant="outlined" type="password" margin="dense" onChange={(e) => setPassword(e.target.value)}/><tr/>
                    <Button variant="contained">Login</Button>
                    <Button variant="outlined">Register</Button>
                </CardContent>
            </Card>
        </div>
     );
}

export default Login;