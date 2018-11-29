const mongoose = require('mongoose');

const { Schema } =  mongoose;

const interviewSchema = new Schema ({
    startTime: Number,
    endTime: Number,
    candidate: String,
    interviewer: String,
    formTitle: String,
    actions: Array
});

module.exports = mongoose.model("Interview", interviewSchema);
