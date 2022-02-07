var express = require('express');
import { Request, Response, NextFunction } from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.render('index', { title: 'Express' });
});

router.use('/api', require('./api'));

module.exports = router;
