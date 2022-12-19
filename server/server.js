const express = require("express");
const app = express();
const path = require("path");
//const cookieParser = require("cookie-parser");
const { PORT = 3001 } = process.env;

const cookieSession = require("cookie-session");
app.use(
    cookieSession({
        secret: `I'm always hungry.`,
        maxAge: 1000 * 60 * 60 * 24 * 90,
    })
);

app.use(express.static(path.join(__dirname, "..", "client", "public")));

//-----------------------------------------------------------------------------//
app.get("/user/id.json", (req, res) => {
    // console.log("session in Server", req.session);
    // const { id } = req.session;
    res.status(200).json({
        userId: 1,
        //firstName: req.session.firstname,
    });
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
