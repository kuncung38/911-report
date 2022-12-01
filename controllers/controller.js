const {Report} = require('../models');

class Controller {
    static home(req, res) {
        res.render('home')
      }

    static reports(req, res) {
        Report.findAll({
            attributes: ['id', ["dateOfEvent", 'date'], "event"],
            order: ["dateOfEvent"]
        })
        .then(data => {
            const dataSent = data.map(el => {
                return el.dataValues
            })
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            console.log(dataSent)
            res.render('reports', {data: dataSent, options})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = Controller