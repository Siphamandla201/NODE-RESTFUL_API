const router = require('express').Router();
const db = require('../config/dbconfig');


router.get('/', (req, res) => {
    db.query(`SELECT * FROM products`, (err, data) => {
        if (err) {
            res.status(400).json({ err: 'An error occurred' });
        }
        else {
            res.status(200).send(data);
        }  
    })
});


router.get('/:id', (req, res) => {
    db.query(`SELECT * FROM products WHERE product_id = ?`, [req.params.id], (err, data) => {
        if (err) {
            res.status(400).json({ err: 'An error occurred' });
        }
        else {
            res.status(200).send(data);
        }  
    })
});

router.post('/', (req, res) => {
    db.query(`INSERT INTO products(image, product_name, description, price) VALUES('${req.body.image}', '${req.body.product_name}', '${req.body.description}', '${req.body.price}')`, (err, data) => {
        if (err) {
            res.status(400).json({ err: 'An error occurred' });
        }
        else {
            res.status(200).send(data) 
        }  
    })
});


module.exports = router;