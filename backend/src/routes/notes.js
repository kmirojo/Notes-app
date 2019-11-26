const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('GET -> Notes Routes'))
    .post((req, res) => res.send('POST -> Notes Routes'))
// router.route('/:id')
    // .get()
    // .put()
    // .delete()

module.exports = router;