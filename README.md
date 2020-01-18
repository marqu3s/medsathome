# MEDS AT HOME

This is a project for learning purposes.

The goal of this project is to increase knowledge in the following topics and tools:
* [RESTFul APIs](https://restfulapi.net/)
    * [OpenAPI Specification (OAS)](https://swagger.io/resources/open-api/)
    * [Swagger](https://swagger.io/)
    * OAUTH
    * JWT
* [GraphQL](https://graphql.org/)

The Meds at Home is an application that allows anyone to control the medicines they currently have at home. The idea comes from the times when I had to take my daughter to the pediatrician and left the doctors' office with a list of medicines to give to her. From the doctors' office straight to the drugstore to buy all the medicines needed.

Who has never wondered while at the drugstore: Do I have this medicine at home? If I have it, how much of it is left? Is it expired?

Then I had the idea to create an app to keep track of the medicines I have at home.

# The Project

This project is divided into 3 sub-projects:
* A REST API in Node.js
* A web frontend in React
* A mobile app in React Native

# Definitions

1. Every user must create an account to use the app. This will allow the users to keep their medicines list private.

    Information required to create a user account:
    * First name
    * Last name
    * Email
    * Password

2. There must be some kind of authentication available for the client (web or mobile) to have access to the API. JWT, OAuth or similar.

3. The user email must be unique in the database to avoid duplicate accounts.

4. The API must provide endpoints to:

    * Create a new account
    * Authenticate the user into the application
    * Update existing account details
    * Add a new medicine to the list
    * Update existing medicine details
    * Remove a medicine from the list

    See API details [here](./docs/api/api.md).

    
