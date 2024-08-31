let person = {
    firstName: "Jonas", // propriedade
    lastName: "Borges", // propriedade

    //método(fullName) é uma ação do objeto.
    fullName: function() {
        return `Nome Completo: ${this.firstName} ${this.lastName}`;
    }
};
console.log(person.fullName()); 
