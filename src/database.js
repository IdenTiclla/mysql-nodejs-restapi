const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'company'
});


mysqlConnection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }else{
        console.log('db is connected');
    }
});

module.exports = mysqlConnection;
