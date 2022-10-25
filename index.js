const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseDetails = require('./data/courseDetails.json');

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courseDetails.find(details => details.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log('technology-world-server', port)
})