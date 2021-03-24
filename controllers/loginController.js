const mongojs = require("mongojs");
const db = mongojs("fullapp", ["users"]);

const loginController = (req, res) => {
    // get data - req.body
    let nameIzForme = req.body.name;
    let passIzForme = req.body.password;
    db.users.find({ first_name: nameIzForme, password: passIzForme }, (err, docs) => {
        if (err) {
            console.log("greska");
            res.redirect("/")
        } else {
            if (docs.length === 1) {
                // success, one user found
                let user = docs[0];
                req.session.user = user;
                if (user.role == "admin") {
                    res.redirect("/admin")
                } else if (user.role == "operater") {
                    res.redirect("/operater")
                } else if (user.role == "savjetnik") {
                    res.redirect("/savjetnik")
                }
                else {
                    res.redirect("/")
                }
            } else {
                // wrong data
                res.redirect("/")
            }
        }
    })



}


module.exports = loginController;