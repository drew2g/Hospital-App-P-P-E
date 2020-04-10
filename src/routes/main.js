const express = require('express');

const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors());
router.use(bodyParser.json());

console.log('hello world');
module.exports = router;
