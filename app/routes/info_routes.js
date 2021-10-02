// routes/info_routes.js

// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 200,
        message: 'Welcome to CS-3219',
    });
});
// Import userController
var userController = require('../../controllers/userController');
// Routes
router.route('/account')
    .get(userController.menu)
    .post(userController.new);
router.route('/account/:user_id')
    .get(userController.view)
    .patch(userController.update)
    .put(userController.update)
    .delete(userController.delete);
// Export API routes
module.exports = router;

