// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Activity = require('./models/Activity');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB (local)
mongoose.connect('mongodb+srv://suresh24l35a:FzReDVfzlWUw4ti3@time-tracker-cluster.ofmvea0.mongodb.net/?retryWrites=true&w=majority&appName=time-tracker-cluster')
.then(() => console.log(" MongoDB Atlas connected"))
  .catch(err => console.error(" MongoDB Atlas connection error:", err));

//  API to log time data
app.post('/log', async (req, res) => {
  const { userId, domain, duration, date } = req.body;
  try {
    await Activity.create({ userId, domain, duration, date });
    res.send({ status: 'ok' });
  } catch (err) {
    res.status(500).send({ status: 'error', error: err });
  }
});

//  API to get user's time usage report
app.get('/report/:userId', async (req, res) => {
  try {
    const data = await Activity.find({ userId: req.params.userId });
    res.json(data);
  } catch (err) {
    res.status(500).send({ error: err });
  }
});

//  Start the server
app.listen(3001, () => {
  console.log(' Server running at http://localhost:3001');
});
