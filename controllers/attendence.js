const Attendence = require("../models/Attendence");

const updateAttendenceofSpecificClass = async (req, res) => {
  console.log(req.body);
  try {
    const attendance = await Attendence.findOne({ date: req.body.date });
    if (attendance) {
      const updateResopnse = await Attendence.findOneAndUpdate(
        { date: req.body.date },
        req.body
      );
      if (updateResopnse) {
        res.json({ success: true, message: updateResopnse });
      }
    } else {
      const createResponse = await Attendence.create(req.body);
      if (createResponse) {
        res.json({ success: true, message: createResponse });
      }
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getAllAttendance = async (req, res) => {
  try {
    const response = await Attendence.find({});
    res.json({ success: true, message: response });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};
module.exports = { updateAttendenceofSpecificClass, getAllAttendance };
