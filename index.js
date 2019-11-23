var express = require("express"),
    app = express(),
    port = 3070;


const users = [{firstName:"fnam1",lastName:"lnam1",userName:"username1"}];

app.get("/", function(req, res) {
    res.json(users);
})

app.listen(port, function(err) {
    console.log("running server on from port:::::::" + port);
});