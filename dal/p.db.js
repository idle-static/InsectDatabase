const Pool = require('pg').Pool;

const pool = new Pool ({
    user: 'angrymage1',
    host: 'localhost',
    database: 'InsectDatabase',
    password: 'foobar',
    port: 5432,
});

// // GET all moths
// const getAllMoths = function(text) {
//     return new Promise(function(resolve, reject) {
//         console.log('hi');
//         const sql = "SELECT * FROM moths;"

//         pool.query(sql, [], (err, result) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(result.rows);
//             }
//         });
//     });    
// }

// // GET all bees
// var getAllBees = function() {
//     return new Promise(function(resolve, reject) {

//         const sql = "SELECT * FROM bees;"

//         pool.query(sql, [], (err, result) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(result.rows);
//             }
//         });
//     });
// }

// module.exports = {
//     getAllMoths,
//     getAllBees
// };

module.exports = pool;