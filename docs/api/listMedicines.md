# List the medicines

Used to get the list of medifines for a registered User.



**URL**: `/medicines`

**Method**: `GET`

**Auth required**: `YES`

---

## URL Params

**Required**: None

**Optional**:

`search=[string to search in medicines names]`

`page=[integer: the page number - default 1]`

`per_page=[integer: the number of items per page - default 10]`

---

## Data Params in JSON

**Required**: None

**Optional**: None

---

## Example

`GET /medicines?search=tylenol&page=1&per_page=5`

---

## Success Response

**Code**: `200 OK`

**Content example**

```json
[
    {
        "name": "Tylenol",
        "expire_date": "2020-06-30",
        "type": "pill",
        "quantity": "half"
    },
]
```

---

## Error Response

**Condition** : If 'email' and 'password' combination is wrong.

**Code**: `400 BAD REQUEST`

**Content example**:

```json
{
    "errors": [
        "No items found."
    ]
}
```