const { Router } = require("express");
const quickSort = require("../helpers/quickSort");
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

router.post('/suma', (req, res) => {
    const { a, b } = req.body;
    if(typeof a === 'number' && typeof b === 'number') {
        return res.json({
            sum: a + b
        })
    }

    return res.status(500).json({
        error: 'Must be a number'
    })
})

router.post('/max', (req, res) => {
    const { arr } = req.body;
    if(arr.length == 0) {
        return res.status(406).json({
            msg: 'Error'
        })
    }

    const sorted = quickSort(arr);
    return res.json({
        sorted: sorted[sorted.length - 1]
    })
})


module.exports = router