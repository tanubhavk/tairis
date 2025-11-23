const express = require('express');
const router = express.Router();

// Import route modules
const healthRoutes = require('./health.routes');
const emergencyRoutes = require('./emergency.routes');
const decisionTreeRoutes = require('./decision-tree.routes');

// Register routes
router.use('/health', healthRoutes);
router.use('/emergencies', emergencyRoutes);
router.use('/decision-tree', decisionTreeRoutes);

module.exports = router;
