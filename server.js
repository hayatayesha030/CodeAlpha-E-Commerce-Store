const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("."));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});