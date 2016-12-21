var router = require('express').Router();

router.get('/',(req, res) => {

    let json = {data : ['from api','readlly', 'i also surprise']} 

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(json));
});

module.exports = router;