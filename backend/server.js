const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// Dummy data
let members = [
  { id: 1, name: 'Alice Park', email: 'alice@lib.com', phone: '123456789', startDate: '2023-01-15', status: 'Active' },
  { id: 2, name: 'Bob Smith', email: 'bob@lib.com', phone: '234567890', startDate: '2022-12-01', status: 'Inactive' },
  { id: 3, name: 'Carol Jones', email: 'carol@lib.com', phone: '345678901', startDate: '2024-04-23', status: 'Active' },
  { id: 4, name: 'David Kim', email: 'david@lib.com', phone: '456789012', startDate: '2023-11-19', status: 'Active' },
  { id: 5, name: 'Eve Turner', email: 'eve@lib.com', phone: '567890123', startDate: '2022-07-30', status: 'Inactive' }
];

app.get('/members', (req, res) => {
  res.json(members);
});

app.post('/members', (req, res) => {
  const { name, email, phone, startDate, status } = req.body;
  if (!name || !email || !phone || !startDate || !status)
    return res.status(400).json({ error: 'All fields are required.' });

  const newMember = {
    id: members.length ? members[members.length - 1].id + 1 : 1,
    name, email, phone, startDate, status
  };
  members.push(newMember);
  res.status(201).json(newMember);
});

app.listen(PORT, () => { console.log(`Server at http://localhost:${PORT}`); });
