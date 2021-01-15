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
    const resultFromDB = await InfoAboutSpring.findAll({attributes: ['name', 'description', 'image']});
    const resultForReact = resultFromDB.map(el => {
        const data = el.get();
        return {
            name: data.name,
            description: data.description,
            image: data.image,
        }
    });
    const filtredArr = resultForReact.filter((elem) => elem.name.toLowerCase()
            .includes(nameForFilter.toLowerCase())
        || elem.description.toLowerCase()
            .includes(nameForFilter.toLowerCase()));

    return res.send(filtredArr);
});

module.exports = router;

