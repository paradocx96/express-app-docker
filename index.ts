const express = require("express");
const app = express();

// default port to listen
const port = 8080;

// define a route handler for the default home page
app.get("/", (req: any, res: any) => {
    res.send("<h1>#GoHomeGota2022</h1>");
});

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});