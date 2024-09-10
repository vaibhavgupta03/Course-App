import { TextField, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import { useState } from "react";

function AddCourse() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    return (
        <div>
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
                Add the Courses💖
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
                    helperText="Please enter the Course Title"
                    label="Title"
                    type="text"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                <TextField
                    helperText="Please enter the Course Description"
                    label="Description"
                    type="text"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                />
                <TextField
                    helperText="Please paste the image link"
                    label="Image Link"
                    type="text"
                    onChange={(e) => {
                        setImage(e.target.value);
                    }}
                />
                <Button variant="contained" color="success"
                    onClick={() => {
                        function callback2(data) {
                            alert("Course Added!");
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch("http://localhost:3000/admin/courses", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                description: description,
                                imageLink: image,
                                published:true
                            }),
                            headers: {
                                 "Content-Type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1)
                }}
                >Add Course🧑‍🏫</Button>
            </Card>
        </div>
    )
}

export default AddCourse;