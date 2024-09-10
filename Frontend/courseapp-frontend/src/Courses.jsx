import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback2(data) {
            console.log(data);
            setCourses(data.courses);
        }
        function callback1(res) {
            if (!res.ok) {
                throw new Error(res.statusText);
            }
            return res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/courses",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, []);

    return <div>
        <Typography variant="h3" style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "30px",
            color: "brown",
            padding: "10px",
            backgroundColor: "white",
            textAlign: "center"
    }}>Courses</Typography>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        padding: "10px",
        gap:"5px"
    }}>
        {courses.length === 0 ? 
            <Typography variant="h5" style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "20px",
                color: "#074173",
                padding: "5px",
                backgroundColor: "white",
            }}>No course found</Typography>:
            courses.map(course => {
                return <Course key={course.id} course={course} />
            })
        }
            </div>
        </div>
}

export default Courses;

function Course(props) {
    return <Card style={{
        margin: "10px",
        padding: "10px",
        width: "300px",
        backgroundColor: "white",
        color: "black",
        textAlign: "center"
    }}>
        <Typography variant="h5" style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "20px",
            color: "#074173",
            padding: "5px",
            backgroundColor: "white",
        }}>{props.course.title}</Typography>
        <Typography variant="h6" style={{
            fontWeight: "bold",
            fontFamily: "sans-serif",
            fontSize: "15px",
            color: "#000000",
            padding: "5px",
            backgroundColor: "white",
        }}>
            {props.course.description}</Typography>
        
        <img src={props.course.imageLink} style={{
            width: "300px",
            borderRadius: "10px",
        }}> 
        </img>
    </Card>
}