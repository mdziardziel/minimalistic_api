var express = require("express"), app = express();
var response = require('../api');
const table = 'tracks'
const idColName = 'TrackId'

app.get("/", function(req, res) {
    response.get(res, table)
})

app.get("/:id", function(req, res) {
    response.show(res, table, idColName, req.params.id)
})

module.exports = app;