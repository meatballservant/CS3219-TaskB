// routes/index.js

const infoRoutes = require('./info_routes');

module.exports = function(app, db) {  
    infoRoutes(app, db)
};