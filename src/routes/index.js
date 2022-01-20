const { Router } = require("express");
const { getAllAppointments, addNewAppointments } = require('../controllers/CitaController');

const router = Router();

// Get all appointments
router.get('/:month/:day/:year', getAllAppointments);

// Add new appointment
router.post('/add', addNewAppointments);



module.exports = router;