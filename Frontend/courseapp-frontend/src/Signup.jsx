import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
    const [username, setEmail] = useState("abcde")
    const [password, setPassword] = useState("abcde")
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80vh',
            width: '100vw',
            objectFit: 'center',
            overflow: 'hidden',
        }}>
        <Typography variant="h3" style={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#000000',
            fontFamily: 'Poppins, sans-serif',
            fontSize: '20px',
            padding: '12px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '10px',
            width: '450px',
            height: '80px',
            margin: 'auto',
            marginTop: '30px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            Welcome to FakeUdemy. Sign up Below✨
        </Typography>
            <Card variant="outlined" style={{
            width: '400px',
            margin: 'auto',
            marginTop: '30px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
                flexDirection: 'column',
            gap:'20px',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: 'white',
            boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            borderRadius: '10px',
            
            
        }}>
                <TextField
                helperText="Please enter your username"
                    label="Username🐵"
                    type="email"
                    // id = {"username"}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
                <TextField
                    helperText="Please enter your Password"
                    label="Password🙈"
                    type="password"
                    // id = {"password"}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <Button variant="contained" color="success"
                    onClick={async() => {
                        // function callback2(data) {
                        //     localStorage.setItem("token", data.token);//even if i shutdown my system then token always stored in localstorage
                        //     Navigate("/")
                        //     window.location.href = '/';
                        // }
                        // function callback1(res) {
                        //     res.json().then(callback2);
                        // }
                        // let username = document.getElementById("username").value;
                        // let password = document.getElementById("password").value;
                        // fetch("http://localhost:3000/admin/signup", {
                        //     method: "POST",
                        //     body: JSON.stringify({
                        //         username,
                        //         password
                        //     }),
                        //     headers: {
                        //         "Content-Type": "application/json"
                        //     }
                        // })
                        
                        // function callback1(response) {
                        //     console.log(response.data);
                        //     const data = response.data;

                        //     localStorage.setItem("token", data.token);
                        //     window.location.href = '/';
                        // }
                        const response = await axios.post("http://localhost:3000/admin/signup", {
                            username:username,
                            password:password
                        })
                        let data = response.data;
                        localStorage.setItem("token", data.token);
                        window.location.href = '/';
                    }}
                
                >Sign Up👍</Button>
            </Card>
        </div>
    )
}

export default SignUp;