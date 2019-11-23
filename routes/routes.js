var express = require("express"), apiRouter = express();

apiRouter.use("/albums", require('./albums'));
apiRouter.use("/artists", require('./artists'));
apiRouter.use("/customers", require('./customers'));
apiRouter.use("/employees", require('./employees'));
apiRouter.use("/genres", require('./genres'));
apiRouter.use("/invoice_items", require('./invoice_items'));
apiRouter.use("/invoices", require('./invoices'));
apiRouter.use("/media_types", require('./media_types'));
apiRouter.use("/playlist_track", require('./playlist_track'));
apiRouter.use("/playlists", require('./playlists'));
apiRouter.use("/tracks", require('./tracks'));

module.exports = apiRouter;
