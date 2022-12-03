const {Report} = require('../models');
const { Op } = require("sequelize");

class Controller {
    static home(req, res) {
        res.render('home')
    }

    static reports(req, res) {
        const searchQuery = req.query
        let filter = {}
        if (searchQuery.event) {
            filter.event = {
                [Op.iLike]: `%${searchQuery.event}%`
            }
        }
        if (searchQuery.age) {
            filter.age =  searchQuery.age  
        }

        let reportData
        Report.findAll({
            attributes: ['id', "dateOfEvent", "event"],
            order: ["dateOfEvent"],
            where: filter
        })
        .then(data => {
            reportData = data
            return Report.getAgeDetail()
        })
        .then(ageDetail => {
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            res.render('reports', {reportData, options, searchQuery, ageDetail: ageDetail[0].dataValues})
        })
        .catch(err => {
            res.send(err)
        })
    }

    static addForm(req, res) {
        res.render('formAdd')
    }

    static createReportPost(req, res) {
        const data = req.body
        Report.create(data)
        .then(res.redirect('/reports'))
        .catch(err => {
            res.send(err)
        })
    }

    static reportDetail(req, res) {
        const id = req.params.id
        Report.findByPk(id)
        .then(data => {
            data ? res.render('formEdit', {data}) : res.render('404')
        })
        .catch(err => {
            console.log(err)
            res.render(404)
        })
    }

    static updateReport(req, res) {
        const data = req.body
        const id = +req.params.id
        Report.update(data, {
            where: {
                id
            }
        })
        .then(res.redirect('/reports'))
        .catch(err => {
            res.send(err)
        })
    }

    static delete(req,res) {
        const id = req.params.id
        Report.destroy({
            where: {
                id
            }
        })
        .then(res.redirect('/reports'))
        .catch(err => {
            res.send(err)
        })
    }
}

module.exports = Controller