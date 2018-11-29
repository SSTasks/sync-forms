export class Interview {
    public _id: any;
    private startTime: number;
    private endTime: number;
    private candidate: string;
    private interviewer: string;
    private formTitle: String;
    private logInOut?: any;
    public actions?: any[];
    private comments?: any[] | string;
}

export interface State {
    interviews: any[]
}
