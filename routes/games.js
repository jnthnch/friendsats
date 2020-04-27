const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const result = await db.query("SELECT * FROM games");
    return res.json(result.rows);
  } catch (e) {
    return next(e);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const result = await db.query(
      "INSERT INTO games (username, password) VALUES ($1,$2) RETURNING *",
      [req.body.username, hashedPassword]
    );
    return res.json(result.rows[0]);
  } catch (e) {
    return next(e);
  }
});

module.exports = router;