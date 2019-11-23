var express = require("express"), app = express();
var response = require('../api');
const table = 'playlist_track'
const idColName = 'PlaylistId'

app.get("/", function(req, res) {
    response.get(res, table)
})

app.get("/:id", function(req, res) {
    response.show(res, table, idColName, req.params.id)
})

module.exports = app;