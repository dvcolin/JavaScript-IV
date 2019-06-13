/// CODE here for your Lambda Classes
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
}

class Instructor extends Person{
    constructor(atts) {
        super(atts);
        this.specialty = atts.specialty;
        this.favLanguage = atts.favLanguage;
        this.catchPhrase = atts.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student) {
        return `${student.name} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
    }

    listsSubjects() {
        this.favSubjects.forEach((subject) => console.log(subject));
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
    }
}