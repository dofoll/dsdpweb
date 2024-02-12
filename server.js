const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
    const { firstName, lastName, email, password, training } = req.body;
    const newUser = { firstName, lastName, email, password, training };
    users.push(newUser);
    res.json({ message: 'Registration successful' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
