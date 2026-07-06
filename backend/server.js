import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Enable CORS so the React frontend can communicate with this API
app.use(cors());

// Enable parsing of JSON body requests
app.use(express.json());

// Simple health-check route to ensure server is working
app.get("/", (req, res) => {
  res.json({ message: "YouTube Downloader Backend is running!" });
});

// Placeholder for POST /video/info (Step 4)
app.post("/video/info", (req, res) => {
  res.status(501).json({ error: "Video info endpoint not implemented yet." });
});

// Placeholder for POST /video/download (Step 7)
app.post("/video/download", (req, res) => {
  res.status(501).json({ error: "Download endpoint not implemented yet." });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
