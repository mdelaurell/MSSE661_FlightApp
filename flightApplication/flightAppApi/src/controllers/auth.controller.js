const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const con = require('../db-config');
const jwtconfig = require('../jwt-config');
const authQueries = require('../queries/auth.queries');
const userQueries = require('../queries/user.queries'); 


//register user
exports.registerUser = function(req, res) {
    const passwordHash = bcrypt.hashSync(req.body.password);

    con.query(authQueries.INSERT_NEW_USER, [req.body.username,  passwordHash, req.body.emailAddress, req.body.activeUser],
        function(err, result) {
            if (err) {
                //stop registeration
                console.log(err);
                res.status(500).send({ msg: 'Could not register user. Please try again later.'});
            }

            con.query(userQueries.GET_ME_BY_USERNAME, [req.body.username], function(err, user) {
                if (err) {
                    console.log(err);
                    res.status(500);
                    res.send({ msg: 'Could not retrieve user'});
                }
                console.log(user);
                res.send(user);
            });
        }
    );
};

//perform login
exports.login = function(req, res) {
    //check user exits
    con.query(userQueries.GET_ME_BY_USERNAME_WITH_PASSWORD, [req.body.username],
        function(err,user) {
            if (err) {
                res.statue(500);
                res.send({ msg: 'Could not tretrieve user.'});
            }
            console.log(user);
            // validate entered password from database saved password
            bcrypt.compare(req.body.password, user[0].password).then(function(validPass) {
                    if (!validPass) {
                        res.status(400).send({msg: 'Invalid Password.'});
                    }
                    // create token
                    const token = jwt.sign({ id: user[0].user_id}, jwtconfig.secret);
                    res
                        .header('auth-token', token)
                        .send({ auth: true, msg: "Logged in."});
                    })
                .catch(console.log);
            }
        );
    };
    
//perform update
exports.updateUser = function(req, res) {
        //check user exits
        con.query(userQueries.GET_ME_BY_USER_ID_WITH_PASSWORD,
            [req.user.id], 
            function(err, user) {
                console.log(err, user);
                if (err) {
                    res.status(500);
                    res.send({ msg: 'Could not retrieve user.' });
                }   
    
            console.log(user);
    
            const passwordHash = bcrypt.hashSync(req.body.password);
    
            //perform update
            con.query(
                authQueries.updateUser, 
                [req.body.username, req.body.email, passwordHash, "true", user[0].id], 
                function(err,result) {
                    if (err) {
                        console.log(err);
                        res.status(500).send({ msg: 'Could not update user settings.' });
                    }
                    res.json({ msg: 'Updated successfully!'});
                }
            );
        }
    );
};
    
    
//perform delete - sets the user to active false
exports.deleteUser = function(req, res) {
    //chek user exits
    con.query(userQueries.GET_ME_BY_USER_ID_WITH_PASSWORD,
        [req.uer.id],
        function(err, user) {
            console.log(err, user);
            if (err) {
                res.status(500);
                res.send({ msg: 'Could not retrieve user.' });
                }
                
                con.query(authQueries.updateUser, ["false", user[0].id], 
                    function(err,result) {
                        if (err) {
                            console.log(err);
                            res.status(500).send({ msg: 'Could not update user settings.' });
                        }
                        res.json({ msg: 'Deleted successfully!'});
                });
        }
    );
};