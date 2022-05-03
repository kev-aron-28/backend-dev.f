const { Router } = require("express")
const router = Router();

router.get('/string/:s', (req, res) => {
    const { s } = req.params
    if(s.length > 10) {
        return res.status(500).json({ 
            msg: 'Error'
        })
    }

    return res.json({
        string: s.toUpperCase()
    })
})

module.exports = router