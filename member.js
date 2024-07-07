function skillsMember() {
    let skills = ['HTML', 'CSS', 'Javascript', 'PHP', 'MySQL', 'Node.js', 'React.js'];
    let member = {
        name: 'Jhon Doe',
        age: 30,
        skills: skills,
        greet: function () {
            console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I know how to code in ${this.skills.join(', ')}`);
        }
    }

    member.greet();
}