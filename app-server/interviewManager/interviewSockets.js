let interviewList = require('./interviewList');

exports.interviewHandler = function(io) {
    io.on('connection', function(socket) {
        // handlers for initiating, joining, disconnecting and finishing interview
        socket.on('initiateInterview', function(interviewData) {
            socket.join(interviewData.interviewId);

            interviewList.addInterview(interviewData);
            interviewList.registerNewLog(interviewData);

            socket.broadcast.emit('updateInterviewList', interviewList.getInterviews);
        });
    
        socket.on('joinInterview', function(connectionInfo) {
            socket.join(connectionInfo.interviewId);
            socket.broadcast.to(connectionInfo.interviewId).emit('showMessage', connectionInfo.messageText);
        });

        socket.on('onLeave', function(eventData) {
            interviewList.logNewEvent(eventData.infoToLog);
            socket.broadcast.to(eventData.interviewId).emit('showMessage', eventData.messageText);
            socket.leave(eventData.interviewId);
        });
    
        socket.on('endInterview', function(eventData) {
            interviewList.removeInterview(eventData);
            interviewList.finishAndSaveLog(eventData.infoToLog);

            socket.broadcast.to(eventData.interviewId).emit('showMessage', eventData.messageText);
            socket.broadcast.to(eventData.interviewId).emit('interviewFinished', true);
            socket.broadcast.emit('updateInterviewList', interviewList.getInterviews);

            socket.leave(eventData.interviewId);
        });

        socket.on('logEvent', function(infoToLog) {
            interviewList.logNewEvent(infoToLog);
        });

        // handlers for transmitting user's interactions to form
        socket.on('click', function(eventData) {
            socket.broadcast.to(eventData.interviewId).emit('mouseClick', eventData);
        });
    
        socket.on('mouseMove', function(eventData) {
            socket.broadcast.to(eventData.interviewId).emit('newMouseMove', eventData);
        });
    
        socket.on('focusEvent', function(eventData) {
            socket.broadcast.to(eventData.interviewId).emit('newFocus', eventData);
        });
    
        socket.on('keyPress', function(eventData) {
            socket.broadcast.to(eventData.interviewId).emit('newKeyPress', eventData);
        });
    
        socket.on('onChange', function(eventData) {
            socket.broadcast.to(eventData.interviewId).emit('newOnChange', eventData);
        });
    });
}
