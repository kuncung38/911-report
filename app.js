const {Report} = require('./models');

Report.findAll()
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })