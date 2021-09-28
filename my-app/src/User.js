class User{
    constructor(
        username, 
        password,
        firstName,
        lastName,
        zipcode, 
        state, 
        city, 
        street,
        cell,
        email
        ) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.zipcode = zipcode;
        this.state = state;
        this.city = city;
        this.street = street;
        this.cell = cell;
        this.email = email;
    }
}
module.exports = User;