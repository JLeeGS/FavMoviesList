import { Button, CardContent, TextField, Typography, Alert, AlertTitle, IconButton, Collapse } from "@mui/material";
import { Link, Router, BrowserRouter, useNavigate, NavLink } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';
import { Card } from "@mui/material";
import { textAlign } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";
import User from "../Objects/User";

async function loginUser(username, password) {
    var config = {
        method: 'get',
        mode: 'cors',
        url: 'https://favmovieslistproj.herokuapp.com/users',
        headers: {'Content-Type':'Application/JSON'},
      };
      
      axios(config)
      .then(function (response) {
        console.log((response.data));
        for(let i = 0; i < response.data.length; i++){
          const userString = (JSON.stringify(response.data[i]))
          const user = JSON.parse(userString)
          if(user.username === username){
            if(user.password === password){
              sessionStorage.setItem('correctPass','true')
              sessionStorage.setItem('username',username)
              sessionStorage.setItem('id', user.id)
            }
            else {
              sessionStorage.setItem('correctPass','false')
            }
          }
        }
      })
      .catch(function (error) {
        console.error(error);
      });
}


function Login() {
    let navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    async function handleLogin(e){
      e.preventDefault()
      await loginUser(username, password)
      if(sessionStorage.getItem('correctPass') === 'true'){
        navigate('/home')
        window.location.reload(false)
      }
    }

    return ( 
        <div>
            <Card sx={{width: "30%"}} variant="outlined">
                <CardContent>
                    <Typography>Login</Typography>
                    <TextField error={username.length < 10} id="username" label="Username" variant="outlined" margin="dense" onChange={(e) => setUsername(e.target.value)}/><tr/>
                    <TextField id="password" label="Password" variant="outlined" type="password" margin="dense" onChange={(e) => setPassword(e.target.value)}/><tr/>
                    <Button variant="contained" onClick={(e) => {handleLogin(e)}}>Login</Button>
                    <Button variant="outlined" component={Link} to={"/register"}>Register</Button>
                </CardContent>
            </Card>
        </div>
     );
}

export default Login;