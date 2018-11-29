export class InfoToLog {
    public author: String;
    public role: String;
    public action: String;
    public time: Number;
    public interviewId: Number;
    public targetTag?: String;
    public targetLabel?: String;
    public newValue?: String | Number;

    constructor(author, role, action, time, interviewId, targetTag?, targetLabel?, newValue?) {
        this.author = author;
        this.role = role;
        this.action = action;
        this.time = time;
        this.interviewId = interviewId;
        this.targetTag = targetTag;
        this.targetLabel = targetLabel;
        this.newValue = newValue;
    }
}
