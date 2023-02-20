const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const db = require('../config/dbconfig');

// router.get('/', (req,res) => {
//     res.status(200);
//     res.json({
//         message : 'Welcome to Users Site'
//     });
// });

router.get('/', (err,data) => {
    db.query(`SELECT * FROM users`)
    if(err) {
        res.status(400).json({
            error : 'An error ocurred'
        })
    }else {
        res.status(200).send(data)
    }
});

router.post('/registration',  bodyParser.json(), (err, data) => {
    db.query(`INSERT INTO users ()`)
   if(err) {
    res.status(400).json({
        error : 'An error ocurred'
    })
   } else {
    res.status(200).send(data)
   }
});

// router.put('/',  bodyParser.json(), (req,res) => {
//     res.status(200);
//     res.json({
//         message : 'Update successful'
//     });
// });

router.put('/:id',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Update Item successful'
    });
});

// router.delete('/',  bodyParser.json(), (req,res) => {
//     res.status(200);
//     res.json({
//         message : 'Delete successful'
//     });
// });

router.delete('/:id',  bodyParser.json(), (req,res) => {
    res.status(200);
    res.json({
        message : 'Item Deleted successfully'
    });
});

module.exports = router;