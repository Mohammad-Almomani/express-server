'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
// Create a /person route using POST method within your server.js that will receive a persons name, age, gender.

app.post('/person', (req, res) => {
    const  {person}  = req.body;
    console.log(person);
    res.send(`${parseInt(person.age) +5}`);
    }
);

function serverRun() {

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    }
);
}

module.exports = {start: serverRun, app: app};
