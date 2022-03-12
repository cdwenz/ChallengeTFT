const router = require('express').Router();
const Controller = require('./Controller');

router.get("/", (req, res)=>{
    res.send("Hello World");
});

module.exports = router;