const router = require('express').Router();

//create all CRUD route relating login and register
router.get('/', (req, res) => {
  res.json({ name: 'Marsiya' });
});

router.post('/postme', (req, res) => {
  const name = req.body.firstname;
  res.json({ name });
});
module.exports = router;
