const express = require("express");
const app = express();
const path = require("path");
const bcrypt = require("bcrypt");
//const cookieParser = require("cookie-parser");
const { PORT = 3001 } = process.env;

const cookieSession = require("cookie-session");
app.use(
    cookieSession({
        secret: `I'm always hungry.`,
        maxAge: 1000 * 60 * 60 * 24 * 90,
    })
);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static(path.join(__dirname, "..", "client", "public")));
const { createUser, getUserByEmail } = require("./database/db");
//-----------------------------------------------------------------------------//
app.get("/user/id.json", (req, res) => {
    // console.log("session in Server", req.session);
    const { id } = req.session;

    res.status(200).json({
        userId: id,
        //firstName: req.session.firstname,
    });
});
app.post("/register", (req, res) => {
    let data = req.body.data;
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data = { ...data, password: hashedPassword };
    createUser(data).then((result) => {
        if (result.error) {
            return res.json({
                success: false,
                message: "something went Wrong!",
            });
        }
        req.session = { ...result };
        return res.json({
            success: true,
            result,
        });
    });
});
//--------------------------------Login-------------------------------------------------

app.post("/login", (req, res) => {
    //console.log("req.bodyEmail server", req.body);
    const { password, email } = req.body;

    getUserByEmail(email).then((result) => {
        if (!result) {
            return res.json({
                success: false,
                message: "Email doesn't exist",
            });
        }
        //console.log("userData from getByEmail server", result);
        const comparePass = bcrypt.compareSync(password, result.password);
        //console.log("compare", comparePass);
        if (!comparePass) {
            return res.json({
                success: false,
                message: "Wrong password",
            });
        }
        req.session = { ...result };
        //console.log("session after login", req.session);
        return res.json({
            success: true,
            data: result.id,
        });
    });
});

//--------------------------------Logout-------------------------------------------------

app.get("/logout", (req, res) => {
    req.session = null;
    // console.log("logout session", req.session);
    return res.json({
        userId: null,
    });
});
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});

app.listen(PORT, function () {
    console.log(`Express server listening on port ${PORT}`);
});
