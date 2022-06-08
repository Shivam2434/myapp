const router = require('express').Router();
let mainRouter = require('./api');

router.use('/api/auth', mainRouter);

module.exports = router;