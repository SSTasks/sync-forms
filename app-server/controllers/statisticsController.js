const Interview = require('../schemas/interviewSchema');

exports.getInterviews = function(req, res) {
    Interview.find((err, interview) => {
        if (err) {
            throw err;
        }
        
        return res.json(interview);
    })
};