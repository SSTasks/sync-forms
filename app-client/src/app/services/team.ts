
export class Team {
    _id: number;
    name: string;
    github: string;

    constructor(_id, name, github) {
        this._id = _id;
        this.name = name;
        this.github = github;
    }
}
