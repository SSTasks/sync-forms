export class Form {
    public title: string;
    public author: string;
    public preview: string;
    public groups: string[];
    public rows: any[];
    public description: string;

    constructor(title, author, preview, groups, rows, description) {
        this.title = title;
        this.author = author;
        this.preview = preview;
        this.groups = groups;
        this.rows = rows;
        this.description = description;
    }
}



