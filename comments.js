// Create web server
// npm install express
// npm install body-parser
// npm install cors

// 1. Import express
const express = require('express');
// 2. Create express server
const app = express();
// 3. Import body-parser
const bodyParser = require('body-parser');
// 4. Import cors
const cors = require('cors');

// 5. Use body-parser
app.use(bodyParser.json());
// 6. Use cors
app.use(cors());

// 7. Create comments array
const comments = [
    {
        id: 1,
        username: 'alice',
        comment: 'Hi there!'
    },
    {
        id: 2,
        username: 'bob',
        comment: 'Hello!'
    },
    {
        id: 3,
        username: 'charlie',
        comment: 'Good day!'
    }
];