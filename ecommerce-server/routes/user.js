const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ name: 'Marsiya' });
});

router.post('/postme', (req, res) => {
  const name = req.body.firstname;
  res.json({ name });
});
module.exports = router;
