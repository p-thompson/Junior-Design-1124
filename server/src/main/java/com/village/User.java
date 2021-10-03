package com.village;

public class User {
    private int id;
    private String username;
    private String password;
    private String firstName;
    private String lastName;
    private Integer zipcode;
    private String state;
    private String city;
    private String street;
    private String cell;
    private String email;
    private String bio;
    private UserType userType;

    public User(
        int id,
        String username, 
        String password,
        String firstName,
        String lastName,
        Integer zipcode,
        String state,
        String city,
        String street,
        String cell,
        String email,
        String bio,
        UserType userType
    ) {
        this.id = id;
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
        this.bio = bio;
        this.userType = userType;
    }

    public int getId() {
        return this.id;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getZipcode() {
        return this.zipcode;
    }

    public void setZipcode(Integer zipcode) {
        this.zipcode = zipcode;
    }

    public String getState() {
        return this.state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return this.city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return this.street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getCell() {
        return this.cell;
    }

    public void setCell(String cell) {
        this.cell = cell;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBio() {
        return this.bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public UserType getUserType() {
        return this.userType;
    }

    public void setUserType(UserType userType) {
        this.userType = userType;
    } 
}