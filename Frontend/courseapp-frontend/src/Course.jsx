import { Button, Card, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

function Course() {
    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);
    const [triggerUpdate, setTriggerUpdate] = useState(false);

    useEffect(() => {
        function callback2(data) {
            console.log(data);
            setCourses(data.courses);
        }
        function callback1(res) {
            res.json().then(callback2);
        }
        fetch("http://localhost:3000/admin/courses",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback1)
    }, [triggerUpdate]);
    
    let course = null;
    for (let i = 0; i < courses.length; i++){
        if (courses[i]._id == courseId){
            course = courses[i];
            break;
        }
    }
    if (!course) {
        return <h4>Loading..........</h4>
    }
    return (
        <div>
            <CourseCard course={course} courseId={courseId} setTriggerUpdate={setTriggerUpdate} triggerUpdate={triggerUpdate}/>
            <UpdateCard course={course} courseId={courseId} setTriggerUpdate={setTriggerUpdate} triggerUpdate={triggerUpdate}/>  
        </div>
    );
}

function UpdateCard(props) {
    const { courseId,setTriggerUpdate,triggerUpdate } = props;
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const course = props.course;
    return (
        <div>
            <Card variant="outlined" style={{
                width: "400px",
                padding: "20px",
                margin:"30px",
                display: 'flex',
                flexDirection: "column",
                gap:"5px",
                justifyContent: 'center'
            }}>
                <Typography variant="h3" style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '20px',
                }}>
                    Update Course Details✏️
                </Typography>
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
                    /><br/>
                    <Button variant="contained" color="success"
                        onClick={() => {
                            function callback2(data) {
                                //alert("Course Updated!");
                                setTriggerUpdate(!triggerUpdate);

                            }
                            function callback1(res) {
                                res.json().then(callback2);
                            }
                            fetch(`http://localhost:3000/admin/courses/${(courseId)}`, {
                                method:"PUT",
                                body: JSON.stringify({
                                    title: title,
                                    description: description,
                                    imageLink: image,
                                    published: true
                                }),
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            }).then(callback1)
                        }}
                    >Update✏️</Button>
                </Card>
            </div>
        )
}

function CourseCard(props) {
    const { courseId,setTriggerUpdate,triggerUpdate } = props;
    const navigate = useNavigate();
    const course = props.course;
    return (
        <Card style={{
            margin: "10px",
            padding: "10px",
            width: "300px",
            minHeight:"200px"
        }}>
            <Typography variant="h5" style={{
            fontWeight:"bold",
            fontSize: "20px",
            color: "#074173",
            padding: "5px",
        }}>{props.course.title}</Typography>
            <Typography variant="h6" style={{
            fontWeight:"bold",
            fontSize: "15px",
            padding: "5px",
        }}>{course.description}</Typography>
        <img src={course.imageLink} style={{
            width: "300px",
            borderRadius: "10px",
            
            }}></img>
            <Button variant="contained" color="error"
                    onClick={() => {
                        function callback2(data) {
                            alert("Course Deleted!");
                            navigate("/courses");
                            setTriggerUpdate(!triggerUpdate);
                        }
                        function callback1(res) {
                            res.json().then(callback2);
                        }
                        fetch(`http://localhost:3000/admin/courses/${courseId}`, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json",
                                "Authorization": "Bearer " + localStorage.getItem("token")
                            }
                        }).then(callback1)
                }}
                >Delete</Button>
        </Card>
    );
}

export default Course;