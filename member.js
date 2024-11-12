function skillsMember() {
    return this.skills.map((skill) => {
        return `${this.name} knows ${skill}`;
    });
}