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

class ProjectManager extends Instructor {
    constructor(atts) {
        super(atts);
        this.gradClassName = atts.gradClassName;
        this.favInstructor = atts.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    } 
}

/////////////////////////////////// PERSON OBJECTS

const joe = new Person({
    name: 'Joe',
    age: 25,
    location: 'San Francisco'
})

const mark = new Person({
    name: 'Joe',
    age: 32,
    location: 'Baltimore'
})

const chris = new Person({
    name: 'Joe',
    age: 58,
    location: 'Orlando'
})

/////////////////////////////////// INSTRUCTOR OBJECTS

const scottI = new Instructor({
    name: 'Scott',
    age: 28,
    location: 'Santa Cruz',
    specialty: 'User Experience',
    favLanguage: 'CSS',
    catchPhrase: 'Never judge a website by its functionality!'
})

const bruceI = new Instructor({
    name: 'Bruce',
    age: 33,
    location: 'San Jose',
    specialty: 'Back-end',
    favLanguage: 'PHP',
    catchPhrase: 'Numbers 4 dayzzz!'
})


/////////////////////////////////// STUDENT OBJECTS

const jimS = new Student({
    name: 'Joe',
    age: 58,
    location: 'Pittsburgh',
    previousBackground: 'University',
    className: 'WEB21',
    favSubjects: 'React and Node.js'
})

const tessaS = new Student({
    name: 'Tessa',
    age: 22,
    location: 'Salt Lake City',
    previousBackground: 'Retail',
    className: 'WEB21',
    favSubjects: 'CSS and Python'
})

/////////////////////////////////// PROJECT MANAGER OBJECTS

const pm1 = new ProjectManager({
    name: 'Sam',
    age: 29,
    location: 'Nashville',
    specialty: 'Databases',
    favLanguage: 'Python',
    catchPhrase: 'Give me Python or give me death!',
    gradClassName = 'WEB10',
    favInstructor: 'Josh Knell'
})

const pm2 = new ProjectManager({
    name: 'Rick',
    age: 57,
    location: 'Planet C-137',
    specialty: 'Traveling across dimensions',
    favLanguage: 'PHP',
    catchPhrase: 'Wubbalubadubdub!',
    gradClassName = 'WEB16',
    favInstructor: 'Dan Levy'
})

















