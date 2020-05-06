const path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile("/html/index.html", {
            root: path.join(__dirname, "../public")
        });

     });
}