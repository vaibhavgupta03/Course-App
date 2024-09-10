import { BrowserRouter as Router,Route } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';

import { useNavigate } from'react-router-dom';

function Appbar() {

    const navigate = useNavigate();
    const [userEmail, setUserEmail] = React.useState(null);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:3000/admin/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(res.statusText);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setUserEmail(data.username);
                setIsloading(true);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, []);
    

    if (userEmail) {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                height: '10vh',
                backgroundColor: 'white',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}>
                <Typography variant="h3"
                    style={{
                        color: '#074173',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                        margin: 'auto',
                        marginLeft: '10px',
                        marginRight: '10px',
                    }}>
                    FakeUdemy
                </Typography>
                <Button variant="contained" style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    fontFamily: 'sans-serif',
                }} onClick={() => {
                    localStorage.setItem("token", null);
                    window.location.href = "/";
                    navigate('/signup');
                }}>Log Out</Button>
            </div>
        )
    }
    else {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px',
                height: '10vh',
                backgroundColor: 'white',
                boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
            }}>
                <Typography variant="h3"
                    style={{
                        color: '#074173',
                        fontSize: '30px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                    }}>
                    FakeUdemy
                </Typography>
                <div>
                    <Button variant="contained" style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                    }} onClick={() => {
                        navigate('/signup');
                    }}>Sign Up</Button>
                    <Button variant="outlined" style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        fontFamily: 'sans-serif',
                        marginLeft: '10px',
                    }} onClick={() => {
                        navigate('/login');
                    }}>Log In</Button>
                </div>
            </div>
        );
    }
}

export default Appbar;