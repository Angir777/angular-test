export class Task {
    title: string | null = null;
    description: string | null = null;
    isDone: boolean = false;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }
}