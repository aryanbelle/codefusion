const express = require("express");
const router = express.Router();
const userDB = require("../models/Userinfo");

router.post("/", async (req, res) => {
    const userData = new userDB({
        age: req.body.age,
        experience: req.body.experience,
        profession: req.body.profession,
        skill: req.body.skill,
        bio: req.body.bio
    });

    await userData
        .save()
        .then((doc) => {
            res.status(201).send(doc);
        })
        .catch((err) => {
            res.status(400).send({
                message: "info not added!",
            });
            console.log(err)
        });
});

module.exports = router;