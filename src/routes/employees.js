const express = require('express');
const router =  express.Router();

const mysqlConnection = require('../database')

router.get('/api/employees', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    console.log(id); 
    mysqlConnection.query(`SELECT * FROM employees WHERE id=${id}`, (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        }else{
            console.log(err);
        }
    });
});

router.post('/api/employees', (req, res) => {
    const {id, name, salary} = req.body;
    const query = `INSERT INTO employees (id, name, salary) VALUES ('${id}', '${name}', '${salary}');`;
    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Employee saved'});
        }else{
            console.log(err);
        }     
    });
});

router.put('/api/employees/:id', (req, res) => {
    const { name, salary} = req.body;
    const { id } = req.params;
    const query = `UPDATE employees SET name='${name}', salary='${salary}' WHERE id=${id}`;

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Employee Updated'});
        }else{
            console.log(err);
        } 
    });
});

router.delete('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM employees WHERE id=${id}`;

    mysqlConnection.query(query, (err, rows, fields) => {
        if (!err) {
            res.json({status: 'Employee Delete'});
        }else{
            console.log(err);
        } 
    });

});

module.exports = router;
