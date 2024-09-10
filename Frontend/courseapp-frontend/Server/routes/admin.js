const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { User, Admin, Course } = require("../db");
const { SECRET } = require("../middleware/auth");
const { authenticateJwt } = require("../middleware/auth");

const router = express.Router();

router.get('/me', authenticateJwt, async (req, res) => {
    const admin = await Admin.findOne({ username: req.user.username });
    res.json({
        username: req.user.username
    });
});

router.post('/signup', (req, res) => {
    const { username, password } = req.body;
    function callback(admin) {
        if (admin) {
            res.status(403).json({ message: 'Admin already exists' });
        } else {
            const obj = { username: username, password: password };
            const newAdmin = new Admin(obj);
            newAdmin.save();
            const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
            res.json({ message: 'Admin created successfully', token });
        }

    }
    Admin.findOne({ username }).then(callback);
});

router.post('/login', async (req, res) => {
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });
    if (admin) {
        const token = jwt.sign({ username, role: 'admin' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'Logged in successfully', token });
    } else {
        res.status(403).json({ message: 'Invalid username or password' });
    }
});
router.post('/courses', authenticateJwt, async (req, res) => {
    const course = new Course(req.body);
    await course.save();
    res.json({ message: 'Course created successfully', courseId: course.id });
});

router.put('/courses/:courseId', authenticateJwt, async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body, { new: true });
    if (course) {
        res.json({ message: 'Course updated successfully' });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

router.get('/courses', authenticateJwt, async (req, res) => {
    const courses = await Course.find({});
    res.json({ courses });
});

router.get('/courses/:courseId', authenticateJwt, async (req, res) => {
    const courseId = req.params.courseId;
    const courses = await Course.find({courseId});
    res.json({ courses });
});

router.delete('/courses/:courseId', authenticateJwt, async (req, res) => {
    const {courseId} = req.params;
    const course = await Course.findByIdAndDelete(courseId);
    if (course) {
        res.json({ message: 'Course deleted successfully' });
    } else {
        res.status(404).json({ message: 'Course not found' });
    }
});

module.exports = router;