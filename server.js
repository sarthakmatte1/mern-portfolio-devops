const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

/* =====================
   Middleware
===================== */
app.use(cors());
app.use(express.json());

/* =====================
   MongoDB Connection
===================== */
mongoose
  .connect(process.env.MONGO_URI || "mongodb://mongo-service:27017/mydb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

/* =====================
   Schema & Model
===================== */
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

/* =====================
   API Routes
===================== */
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error sending message" });
  }
});

app.get("/api/contacts", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error fetching contacts" });
  }
});

/* =====================
   Health Check (IMPORTANT FOR K8s)
===================== */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* =====================
   Server Start
===================== */
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

/* =====================
   Safety (Prevent Crashes)
===================== */
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});
