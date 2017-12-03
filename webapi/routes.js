module.exports = function (app) {

  
   app.use("/api/posts", require("./api/posts/index"));
   app.use("/api/cages", require("./api/cages/index"));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|app|assets)/*')
        .get(function (req, res) {
            res.send(404);
        })

};