# Sign up

Used to create a new User.



**URL** : `/signup`

**Method** : `POST`

**Auth required** : NO

---

## URL Params

**Required**: None

**Optional**: None

---

## Data Params in JSON

**Required**:

```json
{
    "first_name": "string",
    "last_name": "string",
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Optional**: None

---

## Example

```json
POST /signup
[
    {
        "first_name": "John",
        "last_name": "Smith",
        "email": "john@example.com",
        "password": "abcd1234"
    },
]
```

---

## Success Response

**Code**: `200 OK`

**Content example**

```json
{
    "token": "93144b288eb1fdccbe46d6fc0f241a51766ecd3d"
}
```

---

## Error Response

**Condition**: If there is a field missing or a validation error.

**Code**: `400 BAD REQUEST`

**Content example**:

```json
{
    "email": "The email provided is not valid",
    "last_name": "The last name is required."
}
```
