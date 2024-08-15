const pool = require('./p.db');

// GET all moths
var getAllMoths = function(text) {
    return new Promise(function(resolve, reject) {
        const sql = "SELECT * FROM moths;"

        pool.query(sql, [], (err, result) => {
            if (err) {
                reject(err);
            } else {
                const formattedMoths = result.rows.map(row => ({
                    moth_id: row.moth_id,
                    name: row.name,
                    species: row.species,
                    color: row.color,
                    size: row.size,
                    wing_span: row.wing_span,
                    habitat: row.habitat,
                    nocturnal: row.nocturnal
                }));
                resolve(formattedMoths); // Now this is an array of objects
            }
        });
    });    
}

module.exports = {
    getAllMoths
}