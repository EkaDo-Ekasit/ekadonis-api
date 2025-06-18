const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({
    message: "🔱 Ekadonis Communicator Online. Welcome to the Universal AI Grid."
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
