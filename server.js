const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory
app.use(bodyParser.json());

// Serve the login page at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Define other routes here
app.post('/auth/login', (req, res) => {
    // Handle login
});

app.get('/onebox/list', (req, res) => {
    // Fetch and return list of threads
});

app.get('/onebox/:thread_id', (req, res) => {
    // Fetch and return specific thread
});

app.delete('/onebox/:thread_id', (req, res) => {
    // Handle deleting a thread
});

app.post('/reply/:thread_id', (req, res) => {
    // Handle sending a reply
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
