// routes/info_routes.js

module.exports = function(app,db) {
    app.post('/info', (req, res) => { console.log(req.body); res.send('Hello')});
};

