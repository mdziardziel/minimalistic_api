const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];
const sqlite3 = require('sqlite3').verbose();

var express = require("express"), app = express(), port = 3070;

app.get("/", function(req, res) {
    let db = new sqlite3.Database('./db/chinook.db');
    let sql = `SELECT DISTINCT Name name FROM playlists ORDER BY name`;
    db.all(sql, [], (err, rows) => {
        if (err) {
          throw err;
        }
        res.json(rows);
      });
    db.close();
})

app.use("/api", require("./routes/routes"));

app.get("*", function(req, res) {
    res.json({error: 'route not found'});
 })

app.listen(port, function(err) {
    console.log("running server on from port:::::::" + port);
});