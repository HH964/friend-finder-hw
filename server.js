const express = require("express");
    const bodyParser = require("body-parser");
const app = express();   
    const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
});