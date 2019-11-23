const sqlite3 = require('sqlite3').verbose();

module.exports = {
    get: function (res, table) {
        let db = new sqlite3.Database('db/chinook.db');
        let sql = `SELECT * FROM ` + table;
        db.all(sql, [], (err, rows) => {
            if (err) {
              throw err;
            }
            res.json(rows);
          });
        db.close();
    },
    show: function (res, table, column, value) {
        let db = new sqlite3.Database('db/chinook.db');
        let sql = `SELECT * FROM ` + table + ` WHERE ` + column + ` = ?`;
        db.get(sql, [value], (err, rows) => {
            if (err) {
              throw err;
            }
            res.json(rows);
          });
        db.close();
    }
};
