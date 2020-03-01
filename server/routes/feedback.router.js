const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET is not being used
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST
// Adds a new feedback to the DB
// Request body must be a feedback object with feeling/understanding/support/comment
//sanitise inputs
//send status back to client side
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('Adding newFeedback to Db', newFeedback);
    let queryText = `INSERT INTO "feedback"("feeling", "understanding",
                      "support", "comments")VALUES($1, $2, $3, $4);`;
    let values = [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comment]
    pool.query(queryText, values).then((result) => {
        console.log('result from router POST', result);
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error from router POST', error);
        res.sendStatus(500);
    })
})

module.exports = router;

