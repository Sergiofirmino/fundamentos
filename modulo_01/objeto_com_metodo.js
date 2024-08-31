let person = {
    firstName: "Jonas",
    lastName: "Borges",
    fullName: function() {
        return `Nome Completo: ${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); 
