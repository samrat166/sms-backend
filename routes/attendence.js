const {
  updateAttendenceofSpecificClass,
  getAllAttendance,
} = require("../controllers/attendence");

const router = require("express").Router();

router.post("/attendences", updateAttendenceofSpecificClass);
router.get("/attendences", getAllAttendance);

module.exports = router;
