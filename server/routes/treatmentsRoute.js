const express = require("express");
const router = express.Router();

const Treatment = require('../models/treatment')


router.get('/getalltreatments', async(req, res) => {

    try {
        const treatments = await Treatment.find({})
        res.send(treatments)
    } catch (error) {
        return res.json.status(400).json({ message: error })
    }

});

router.post('/gettreatmentbyid', async(req, res) => {

    const treatmentid = req.body.treatmentid

    try {
        const treatment = await Treatment.findOne({_id : treatmentid})
        res.send(treatment)
    } catch (error) {
        return res.json.status(400).json({ message: error })
    }

});
module.exports = router;