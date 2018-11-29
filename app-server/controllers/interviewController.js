let interviewList = require('../interviewManager/interviewList');

exports.sendActiveInterviews = function (req, res) {
    res.send(interviewList.getInterviews);
}
