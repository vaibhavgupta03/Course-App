import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
function Login() {
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
            width: '400px',
            height: '80px',
            margin: 'auto',
            marginTop: '30px',
            marginBottom: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            Welcome Back. Sign in below😊
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
                />
                <TextField
                    helperText="Please enter your Password"
                    label="Password🙈"
                    type="password"
                />
                <Button variant="contained" color="success" onClick={() => {
                    
                }}>
  Sign In😉
</Button>
            </Card>
        </div>
    )
}

export default Login;