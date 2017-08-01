class NewUser {
    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    GetUser(){
        return {
            firstName,
            lastName,
            password,
            email
        }
    }
}