const { Router } = require("express");
const router = Router();

router.get('/peliculas', () => {});
router.get('/peliculas/:id', () => {});
rotuer.put('/peliculas/:id', () => {});
router.post('/peliculas', () => {});
router.delete('/peliculas/:id', () => {});

module.exports = router;