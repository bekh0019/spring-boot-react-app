# About app

This is an example of fullstack app using spring boot together
with react.

### How to start
* start spring boot application
* go to front-end folder and run npm i && npm start
* application will start on http://localhost:3000

### Simple debit-credit functionality
use Postman or any similar API to create debit/credit operations

* Example request
POST http://localhost:8080/history

{
"type":"DEBIT",
"user": {
    "id":1
},
"amount":50
}

* type -> could be DEBIT or CREDIT.
* user(id) -> for now hardcoded
* amount -> transaction amount.


