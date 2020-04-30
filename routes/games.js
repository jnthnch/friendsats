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


//add user

// add selection
// INSERT INTO selections (id, game_id, time, date, selection, is_won, is_push) 

// add user_selection
// INSERT INTO user_selections (user_id, selection_id) VALUES ((SELECT id from users WHERE id=1), (SELECT id FROM selections where id=1))
module.exports = router;