const express = require("express");
const router = express.Router();
const db = require("../db");

// display_owner_view
router.get("/view", (req, res) => {
  db.query("SELECT * FROM display_owner_view", (err, result) => {
    if (err) return res.status(400).json({ error: err.message });
    res.status(200).json(result);
  });
});

// add_owner - stored procedure
router.post("/add", (req, res) => {
  const { username, first_name, last_name, address, birthdate } = req.body;

  // Validate input fields
  if (!username || !first_name || !last_name || !address || !birthdate) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required." });
  }

  // call the add_owner stored procedure
  db.query(
    "CALL add_owner(?, ?, ?, ?, ?)",
    [username, first_name, last_name, address, birthdate],
    (err) => {
      if (err) {
        // duplicate username or other database errors
        if (err.code === "ER_DUP_ENTRY" || err.code === "ER_SIGNAL_EXCEPTION") {
          return res.status(400).json({
            success: false,
            message: "Username already exists in the database.",
          });
        }
        return res.status(500).json({
          success: false,
          message: "Internal server error: " + err.message,
        });
      }

      // successfully added the owner
      res
        .status(200)
        .json({ success: true, message: "Owner added successfully!" });
    }
  );
});

module.exports = router;
