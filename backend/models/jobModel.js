const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({});

module.exports = mongoose.model("Jobs", jobSchema);
