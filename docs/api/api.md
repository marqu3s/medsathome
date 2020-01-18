# REST API

REST means REpresentational State Transfer. It means that the application knows the actual state of a resouce and it can send that state to other applications or accept requests to manipulate the current state of a resource.

A resource is an abstraction of some information that the application manages. In an e-commerce website, a resource could be a client or a product for example.

It consists of principles / rules / constraints that allows a system to offer an standardized interface to comunicate with other systems, allowing them to manipulate the resources.

The communication is made by using specific URIs (Uniform Resource Identifier) and HTTP methods. Some examples:

* GET https://api.example.com/products
* GET https://api.example.com/products/1
* POST https://api.example.com/products
* DELETE https://api.example.com/products/1

These are the allowed HTTP methods used:

* **GET** - Get resource data (a list or just from one resource)
* **POST** - Create a new resource
* **PUT** - Update a resource completely
* **PATCH** - Update a resource partially
* **DELETE** - Delete a resource
* **HEAD** - Similar to GET, used to get response headers only
* **OPTIONS** - Used to find out that methods are allowed to manipulate a resource

## Best Practices When Developing an API

* An API should use the resource name in the plural form (contacts, medicines, ...)
* Use human readable URIs
* Separate words in URIs using a dash (-)
* Do not add the operation in the URI like /create or /update
* Do no change the existing URIs format to avoid breaking existing clients. Create a new API version to to so.
* For URIs that manipulates one resource, add the resource identifier at the end of the URI.
* Use the apropriate response codes in the responses
    * 2xx - request processed successfully
    * 3xx - an action should be taken to process the request successfully
    * 4xx - errors on the client side
    * 5xx - errors on the server side

Checkout a list of common response status code [here](./responseStatusCodes.md)


# API Endpoints

The API for this project must provide endpoints to:

* Create a new account
* Authenticate the user into the application
* Update existing account details
* Add a new medicine to the list
* Update existing medicine details
* Remove a medicine from the list

## Open Endpoint

These requires no authentication

* [Sign up](./signup.md)
* [Sign in]((./signin.md))


## Endpoints that requires authentication

* [List the medicines](./listMedicines.md)
* [Add a new medicine to the list](./createMedicine.md)
* [Update an existing medicine](./updateMedicine.md)
* [Remove a medicine from the list](./deleteMedicine.md)




### Add a new medicine to the list
**POST /medicines**

    Payload
    {
        name: "string"
        expire_date: "string"
        type: "string"
        quantity: "string"
    }



###  Update an existing medicine
**PATCH /medicines/{id}**

    URL parameters
    {
        id: "string" - the medicine ID
    }

    Payload (any of the following)
    {
        name: "string"
        expire_date: "string"
        type: "string
    }


### Delete an existing medicine
**DELETE /medicines/{id}**

    URL parameters
    {
        id: "string" - the medicine ID
    }

