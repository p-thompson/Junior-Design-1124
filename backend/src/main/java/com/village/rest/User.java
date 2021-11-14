package com.village.rest;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class User {
    @XmlElement private Integer id;
    @XmlElement private String username;
    @XmlElement private String password;
    @XmlElement private String firstName;
    @XmlElement private String lastName;
    @XmlElement private Integer zipcode;
    @XmlElement private String state;
    @XmlElement private String city;
    @XmlElement private String street;
    @XmlElement private String cell;
    @XmlElement private String email;
    @XmlElement private String bio;
    @XmlElement private UserType userType;

    public User() {

    }

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