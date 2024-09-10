
import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'
import Login from './Login'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import AddCourse from './AddCourse'
import Courses from './Courses'
import Course from './Course'

function App() {

  return (
    <><Router>
      <Appbar />
      <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course />} />
      </Routes> 
    </Router>
    </>
  )
}

export default App
