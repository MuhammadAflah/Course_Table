const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const courses = [
  { id: 1, name: 'Basic Algorithm',lessons: "25 lessons", date: "27 jan 2023", lesson: "10/25 (48%)", duration:"14h 38m 56s" },
  { id: 2, name: 'Web Development', lessons: "25 lessons", date: '27 jan 2023', lesson: "40/45 (97%)" , duration:"36h 30m 00s" },
  { id: 3, name: 'Basic data science', lessons: "25 lessons", date: '27 jan 2023', lesson: "9/37 (40%)" , duration:"37h 00m 00s" },
  { id: 4, name: 'UI/UX Design', lessons: "25 lessons", date: '27 jan 2023', lesson: "26/32 (84%)" , duration:"16h 40m 50s" },
  { id: 5, name: 'Project Management', lessons: "25 lessons", date: '27 jan 2023', lesson: "14/19 (89%)" , duration:"13h 20m 00s" },

];

app.use(cors());
app.use(bodyParser.json());

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
