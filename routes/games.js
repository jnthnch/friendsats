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

// router.post("/", async (req, res, next) => {
//   try {
//     const result = await db.query(
//       "INSERT INTO games (username, password) VALUES ($1,$2) RETURNING *",
//       [req.body.username, hashedPassword]
//     );
//     return res.json(result.rows[0]);
//   } catch (e) {
//     return next(e);
//   }
// });



// create users table
// CREATE TABLE users (id SERIAL, username text, PRIMARY KEY (id));
//add user


// create games table
// CREATE TABLE games(id INTEGER, homeTeam text, awayTeam text, homeScore INTEGER, awayScore INTEGER, homeSpread text, awaySpread text, PRIMARY KEY(id));
// add selection
// INSERT INTO selections (id, game_id, time, date, selection, is_won, is_push) 


// INSERT INTO games (id, homeTeam, awayTeam, homeSpread, awaySpread) VALUES (10, 'Chiefs', 'Texans', '-10', '+10');
// add user_selection
// INSERT INTO user_selections (user_id, selection_id) VALUES ((SELECT id from users WHERE id=1), (SELECT id FROM selections where id=1))

// update games
// UPDATE games SET home_team = 'Chiefs', away_team = 'Texans', home_spread = '-10', away_spread = '+10' WHERE id = 10;
// UPDATE games SET home_team = 'Falcons', away_team = 'Seahawks', home_spread = 'pk', away_spread = 'pk' WHERE id = 11;
// UPDATE games SET home_team = 'Redskins', away_team = 'Eagles', home_spread = '+6.5', away_spread = '-6.5' WHERE id = 12;
// UPDATE games SET home_team = 'Patriots', away_team = 'Dolphins', home_spread = '-6.5', away_spread = '+6.5' WHERE id = 13;

module.exports = router;