const InterviewLog = require('../schemas/interviewSchema');

class InterviewList {
    constructor() {
        this.activeInterviews = [];
        this.activeLogs = {};
    }

    get getInterviews() {
        return this.activeInterviews;
    }
    
    addInterview(interview) {
        this.activeInterviews.push(interview);
    }

    removeInterview(interview) {
        this.activeInterviews = this.activeInterviews.filter(interviewSpecimen => {
            return interviewSpecimen.interviewId !== interview.interviewId;
        });
    }

    registerNewLog(interviewData) {
        this.activeLogs[interviewData.interviewId] = {
            startTime: interviewData.creationTime,
            endTime: 0,
            interviewer: interviewData.interviewer,
            candidate: '',
            formTitle: interviewData.formName,
            actions: []
        };

        const infoToLog = {
            author: interviewData.interviewer,
            role: interviewData.role,
            action: 'start',
            time: interviewData.creationTime,
            interviewId: interviewData.interviewId
        };

        this.logNewEvent(infoToLog);
    }

    logNewEvent(eventData) {
        const interviewId = eventData.interviewId;

        this.activeLogs[interviewId].actions.push(eventData);
        delete eventData.interviewId;

        if (eventData.action === 'connect') {
            this.setCandidate(eventData, interviewId);
        }
    }

    setCandidate(eventData, interviewId) {
        if (!this.activeLogs[interviewId].candidate
          && eventData.role === 'candidate') {
            this.activeLogs[interviewId].candidate = eventData.author;
        }
    }

    finishAndSaveLog(eventData) {
        const interviewId = eventData.interviewId;

        if (!this.activeLogs[interviewId].candidate) {
            delete this.activeLogs[interviewId];
            return;
        }

        this.activeLogs[interviewId].actions.push(eventData);
        this.activeLogs[interviewId].endTime = eventData.time;
        delete eventData.interviewId;

        const logToSave = new InterviewLog(this.activeLogs[interviewId]);

        logToSave.save((err) => {
            if (err) {
                console.log(err);
                return;
            }

            delete this.activeLogs[interviewId];
        });

    }
}

let interviewList = new InterviewList();

module.exports = interviewList;
