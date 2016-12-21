let router = require('express').Router();

router.get('/', (req, res, next) => {
    res.locals.response.sendText('calling api');
})

module.exports = router