require('dotenv').config();
const express = require('express');
const router = express.Router();
const sequelize = require('../../sequelize');
const InfoAboutSpring = require('../../models/InfoAboutSpring');

sequelize.sync().then(result => {
    console.log('result');
})
    .catch(err => console.log(err));

router.get('/spring', async (req, res) => {
    const nameForFilter = req.query.filter;
    try {
        const result = await InfoAboutSpring.findAll({attributes: ['name', 'description', 'image']});
    }
    catch (e){
        next(e);
    }
    const filtredArr = result.filter((elem) => elem.name.toLowerCase()
            .includes(nameForFilter.toLowerCase())
        || elem.description.toLowerCase()
            .includes(nameForFilter.toLowerCase()));

    return res.json(filtredArr);
});

module.exports = router;

