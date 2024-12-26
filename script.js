const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Dummy course data
const courses = [
  { id: 1, title: 'Web Development', description: 'Learn to build websites.' },
  { id: 2, title: 'Data Science', description: 'Learn to analyze data.' }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
