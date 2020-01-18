# Sign in

Used to collect a Token for a registered User.



**URL**: `/signin`

**Method**: `POST`

**Auth required**: `NO`

---

## URL Params

**Required**: None

**Optional**: None

---

## Data Params in JSON

**Required**:

```json
{
    "email": "[valid email address]",
    "password": "[password in plain text]"
}
```

**Optional**: None

---

## Example

```json
POST /signin
[
    {
        "email": "Tylenol",
        "password": "2020-06-30",
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

**Condition**: If 'email' and 'password' combination is wrong.

**Code**: `400 BAD REQUEST`

**Content example**:

```json
{
    "errors": [
        "Unable to login with provided credentials."
    ]
}
```
