# HTTP Response Codes Commonly Used

For more codes visit the [RFC7231 page](https://tools.ietf.org/html/rfc7231#section-6).

## 2xx Family

|Code|Description|Used when|
|:---:|:---:|---|
|200|OK|GET, PUT and DELETE requests executed successfully|
|201|Created|POST requests when a new resource is created successfully|
|202|Accepted|request has been accepted for processing, but the processing has not been completed. This status code is useful when the actual operation is asynchronous in nature.|
|204|No Content|server has successfully fulfilled the request and that there is no content to send in the response payload body.|
|206|Partial Content|GET requests returns only parts of a resource|

## 3xx Family

|Code|Description|Used when|
|:---:|:---:|---|
|302|Found|requests are made to old URIs|

## 4xx Family

|Code|Description|Used when|
|:---:|:---:|---|
|400|Bad Request|client sends wrong information in the request|
|401|Unauthorized|authorization is required but was not sent with the request|
|403|Forbidden|the client does not have access to the requested resource|
|404|Not Found|the client requested an invalid URI|
|405|Method not Allowed|the method used by the client is not supported|
|406|Not Acceptable|the representation format requested by the client is not supported|
|415|Unsupported Media Type|the representation format of the resource sent by the client is not supported|
|429|Too Many Requests|the client exceeds the maximum number of requests allowed in a time frame|

## 5xx Family

|Code|Description|Used when|
|:---:|:---:|---|
|500|Internal Server Error|the server has encountered an internal error|
|503|Service Unavailable|server is not available (offline or not responding)|