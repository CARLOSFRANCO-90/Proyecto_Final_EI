const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function signUp(req, res) {
    const user = new User();
    const { email, password, repeatPassword } = req.body;
    user.email = email;
    /* por defaul almacenemos el rol y si es un usuario activo o no*/
    user.role = "admin";
    user.active = true;
    /*Si o existe una de las dos password */
    if (!password || !repeatPassword) {
        res.status(404).send({ message: "Las contraseñas son obligatorias" });
    } else {
        if (password !== repeatPassword) {
            res.status(404).send({ message: "Las contraseña no coninciden" });
        } else {
            bcrypt.hash(password, null, null, function (err, hash) {
                /*No funciono la encriptacion */
                if (err){
                res
                    .status(500)
                    .send({ message: "Error al encriptar la contraseña." });
                } else {
                    user.password = hast;
                    user.save((err, userStored) => {
                        if (err) {
                         res.status(500).send({ message: "El usuario ya existe." });
                        } else {
                            if (!userStored) {
                                res.status(404).send({ message: "Error el crear el usurio." });
                            } else {
                                res.status(200).send({ user: userStored });
                            }
                        }
                    });         
                }
            });
        }
    }       
}
module.exports = { signUp };  