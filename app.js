require('dotenv').config(); // Load environment variables
const express = require("express");
const app = express() ;
const PORT = process.env.PORT || 8000;
const Score = require("./models/schema");
const moment = require("moment");
app.use(express.static("public"));

app.set("view engine","ejs");

const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const mongoose = require ("mongoose");

mongoose.connect(process.env.URL).then(
    ()=>{
        app.listen(PORT,()=>{
            console.log(`http://localhost:${PORT}`)
        })
    }
).catch((err)=>{
    console.log(err)
})


app.get("/",(req,res)=>{
    res.render("start")
})

app.post('/send-message', async (req, res) => {

  const { name, email, message } = req.body;

  // create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
       user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS         // 👈 use a Gmail App Password (not your login password)
    }
  });

  // email options
  let mailOptions = {
    from: email,
   to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `
      You have a new message from your portfolio contact form:
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.send(`<script>alert('Message sent successfully!'); window.location.href='/'</script>`);
  } catch (error) {
    console.error(error);
    res.status(500).send(`<script>alert('Error sending message. Please try again.'); window.location.href='/'</script>`);
  }
});


app.get("/play",(req,res)=>{
    res.render("game")
})


app.post("/api/scores", async (req, res) => {
  try {
    const { player, score } = req.body;
    if (!player || score === undefined) {
      return res.status(400).json({ error: "Missing player or score" });
    }

    const newScore = new Score({ player, score });
    await newScore.save();

    res.json({ success: true, score: newScore });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }

  res.redirect("leaderboard")
});



app.get("/leaderboard", async (req, res) => {
  try {
    const scores = await Score.find().sort({ score: -1 }).limit(20); // top 20
    res.render("leaderboard", { scores , moment});
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching leaderboard");
  }
});

