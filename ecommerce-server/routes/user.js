const router = require('express').Router();
const User = require('../models/User');

//create all CRUD route relating to the user
router.get('/', (req, res) => {
  res.json({ name: 'Marsiya' });
});

router.post('/postme', (req, res) => {
  const name = req.body.firstname;
  res.json({ name });
});
module.exports = router;
