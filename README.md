# MEDS AT HOME

This is a project for learning purposes.

The goal of this project is to increase knowledge in the following topics and
tools:
* [ESLint](https://eslint.org)
* [RESTFul APIs](https://restfulapi.net)
    * [OpenAPI Specification (OAS)](https://swagger.io/resources/open-api)
    * [Swagger](https://swagger.io)
    * OAUTH
    * [JWT](https://jwt.io)
* [GraphQL](https://graphql.org)
* [MongoDB](https://www.mongodb.com) mah / PsY0hv6YroGf1Oo4
* [Mongoose](https://mongoosejs.com)
* [Node.js](https://nodejs.org)
* [nodemon](https://nodemon.io)
* [Sucrase](https://sucrase.io)
* React
* React JS
* React Native
* Paralelism

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

# Development environment configuration

[Yarn](https://yarnpkg.com) was used as the package manager.

```
yarn init
```

## VSCode

The follwing plugins are being used:
* ESLint by Dirk Baeumer
* Prettier by Esben Petersen

## ESLint

```
yarn add --dev eslint
yarn eslint --init
```

Choose the options for nodejs development and Airbnb style guide. Then delete the `package-lock.json`  and just run `yarn` to install the dependencies that were installed by `npm`.

Add the following lines to the VSCode settings.json file:

```json
"eslint.format.enable": true,
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": [
    "html",
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
]
```

Let's customize some linting rules in `.eslintrc.js`:

```json
rules: {
    // ignore unused next vars
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "next"
      }
    ]
}
```

## Prettier

```
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

Then edit `.eslintrc.js` file:

```diff
-- extends: ['airbnb-base'],
++ extends: ['airbnb-base', 'prettier'],
++ plugins: ['prettier'],
rules: {
++  "prettier/prettier": "error",
}
```


```js
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "prettier/prettier": 'error'
  },
};
```

This way the code formating will be made only by prettier.

## Sucrase & Nodemon

```
yarn add --dev sucrase nodemon
```

Then edit `package.json` ...

```diff
++ "scripts": {
++    "dev": "nodemon src/index.js",
++    "dev:debug": "nodemon --inspect  src/index.js"
++  }
```

and create a file named `nodemon.json` on the root folder:

```json
{
    "execMap": {
        "js": "node -r sucrase/register"
    }
}
```

To debug applications, create a new configuration for nodejs.

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "protocol": "inspector"
        }
    ]
}
```

## MongoDB & Mongoose

```
yarn add mongoose
```

[Mongoose guide](https://mongoosejs.com/docs/index.html)

## Bcrypt

Used to encrypt and decrypt passwords

```
yarn add bcryptjs
```

## JWT

JWT = Json Web Token

```
yarn add jsonwebtoken
```