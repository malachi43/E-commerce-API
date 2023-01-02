
# INSTALLING THE PROJECT
1. Clone the repository to your local machine by running the command, `git clonehttps://github.com/malachi43/E-commerce-API.git` in your CLI (terminal). For this command to work you must have git installed. To download click [here](https://git-scm.com/downloads).

2. cd (change directory) into e-commerce-API directory.

3. run `npm install` in your terminal(command line) to install the required dependencies.

4. run `node app.js` to start the server on port 5000.


#  USING THE API

## E-COMMERCE-API

This API helps to meet your e-commerce needs from creating a user to allowing product reviews and so much more.

### FEATURES

1. Allows integration from a stand-alone front-end hosted on another server, this is made possible through CORS( Cross Origin Resource Sharing ).
2. Secured response headers to prevent attacks from hackers.
3. Prevention of mongoDB injections.
4. Sanitization of user inputs.
5. Use of Json Web Tokens ( JWT ).

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->
[SEE DOCUMENTATION HERE](https://e-commerce-api-m60x.onrender.com)


## Endpoints

* [Auth](#auth)
    1. [Logout User](#1-logout-user)
        * [Logout User](#i-example-request-logout-user)
    1. [Register User](#2-register-user)
        * [Register User](#i-example-request-register-user)
    1. [Login User](#3-login-user)
        * [Login User](#i-example-request-login-user)
* [User](#user)
    1. [Update User](#1-update-user)
        * [Update User](#i-example-request-update-user)
    1. [Update User Password](#2-update-user-password)
        * [Update User Password](#i-example-request-update-user-password)
    1. [Show Current User](#3-show-current-user)
        * [Show Current User](#i-example-request-show-current-user)
    1. [Get Single User](#4-get-single-user)
        * [Get Single User](#i-example-request-get-single-user)
    1. [Get All Users](#5-get-all-users)
        * [Get All Users](#i-example-request-get-all-users)
* [Product](#product)
    1. [Get Single Product](#1-get-single-product)
        * [Get Single Product](#i-example-request-get-single-product)
    1. [Get All Products](#2-get-all-products)
        * [Get All Products](#i-example-request-get-all-products)
    1. [Delete Product](#3-delete-product)
        * [Delete Product](#i-example-request-delete-product)
    1. [Update Product](#4-update-product)
        * [Update Product](#i-example-request-update-product)
    1. [Get Single Product Reviews](#5-get-single-product-reviews)
        * [Get Single Product Reviews](#i-example-request-get-single-product-reviews)
    1. [Upload Image](#6-upload-image)
        * [Upload Image](#i-example-request-upload-image)
    1. [Create Product](#7-create-product)
        * [Create Product](#i-example-request-create-product)
* [Review](#review)
    1. [Get All Reviews](#1-get-all-reviews)
        * [Get All Reviews](#i-example-request-get-all-reviews)
    1. [Get Single Review](#2-get-single-review)
        * [Get Single Review](#i-example-request-get-single-review)
    1. [Update Review](#3-update-review)
        * [Update Review](#i-example-request-update-review)
    1. [Delete Review](#4-delete-review)
        * [Delete Review](#i-example-request-delete-review)
    1. [Create Review](#5-create-review)
        * [Create Review](#i-example-request-create-review)
* [Order](#order)
    1. [Get All Orders](#1-get-all-orders)
        * [Get All Orders](#i-example-request-get-all-orders)
    1. [Get Single Order](#2-get-single-order)
        * [Get Single Order](#i-example-request-get-single-order)
    1. [Create Order](#3-create-order)
        * [Create Order](#i-example-request-create-order)
    1. [Update Order](#4-update-order)
        * [Update Order](#i-example-request-update-order)
    1. [Show Current User Orders](#5-show-current-user-orders)
        * [Show Current User Orders](#i-example-request-show-current-user-orders)

--------



## Auth

Registering and providing login access to users.



### 1. Logout User


Logs out the registered user.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/auth/logout
```



***More example Requests/Responses:***


#### I. Example Request: Logout User



***Body: None***



#### I. Example Response: Logout User
```js
{
    "msg": "You're logged out"
}
```


***Status Code:*** 200

<br>



### 2. Register User


Registers and adds the user to the database by collecting the necessary credentials.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/auth/register
```



***Body:***

```js        
{
	"name": "User1",
	"email": "user1@gmail.com",
	"password": "secret"
}
```



***More example Requests/Responses:***


#### I. Example Request: Register User



***Body:***

```js        
{
	"name": "User1",
	"email": "user1@gmail.com",
	"password": "secret"
}
```



#### I. Example Response: Register User
```js
{
    "user": {
        "name": "User1",
        "userId": "63b1650e4d851536885c49a5",
        "role": "user"
    }
}
```


***Status Code:*** 201

<br>



### 3. Login User


Gives the registered user access to the protected API routes.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/auth/login
```



***Body:***

```js        
{

	"email": "mohammed@gmail.com",
	"password": "secret"
}
```



***More example Requests/Responses:***


#### I. Example Request: Login User



***Body:***

```js        
{

	"email": "mohammed@gmail.com",
	"password": "secret"
}
```



#### I. Example Response: Login User
```js
{
    "user": {
        "name": "Mohammed",
        "userId": "639cd211e80a891f7c9c6132",
        "role": "admin"
    }
}
```


***Status Code:*** 200

<br>



## User

Provides access to creating a user, deleting a user, updating user details and fetching a user from the database.



### 1. Update User


Updates a specific registered user **name** or **email.**


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/users/updateUser
```



***Body:***

```js        
{
	"name": "jackie",
	"email": "jackie@gmail.com"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update User



***Body:***

```js        
{
	"name": "jackie",
	"email": "jackie@gmail.com"
}
```



#### I. Example Response: Update User
```js
{
    "Updated_User": {
        "role": "admin",
        "_id": "639cd211e80a891f7c9c6132",
        "name": "jackie",
        "password": "$2a$10$mA2VjFAOOBqMIT5QWlg9T.UZzySfbAjY9V6HRKvjn026ANhPMqgue",
        "email": "jackie@gmail.com",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 2. Update User Password


Updates a specific registered user **password.**


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/users/updateUserPassword
```



***Body:***

```js        
{
	"oldPassword": "secret",
	"newPassword": "newSecret"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update User Password



***Body:***

```js        
{
	"oldPassword": "secret",
	"newPassword": "newSecret"
}
```



#### I. Example Response: Update User Password
```js
{
    "msg": "Password successfully updated"
}
```


***Status Code:*** 200

<br>



### 3. Show Current User


Shows the current user.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/users/showMe
```



***More example Requests/Responses:***


#### I. Example Request: Show Current User



***Body: None***



#### I. Example Response: Show Current User
```js
{
    "user_data": {
        "name": "jackie",
        "role": "admin",
        "userId": "639cd211e80a891f7c9c6132"
    }
}
```


***Status Code:*** 200

<br>



### 4. Get Single User


Gets a specific registered user using a **user ID**.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/users/639cd235e80a891f7c9c613a
```



***More example Requests/Responses:***


#### I. Example Request: Get Single User



***Body: None***



#### I. Example Response: Get Single User
```js
{
    "user": {
        "role": "user",
        "_id": "639cd235e80a891f7c9c613a",
        "name": "Susan",
        "email": "susan@gmail.com",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 5. Get All Users


Get all registered users.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/users
```



***More example Requests/Responses:***


#### I. Example Request: Get All Users



***Body: None***



#### I. Example Response: Get All Users
```js
{
    "numberOfUsers": 8,
    "users": [
        {
            "role": "user",
            "_id": "639cd226e80a891f7c9c6136",
            "name": "simbi",
            "email": "simbi@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "639cd235e80a891f7c9c613a",
            "name": "Susan",
            "email": "susan@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "639cd245e80a891f7c9c613e",
            "name": "Tyler",
            "email": "tyler@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "639e47e80b09670b1803ae8a",
            "name": "malachi",
            "email": "malachi@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "639e51b38cf9f1351897ff5b",
            "name": "michael",
            "email": "michael@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "639e522480622b0ad0df41c7",
            "name": "jack",
            "email": "jack@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "63a8c0e04e3e503148134d7d",
            "name": "john",
            "email": "john@gmail.com",
            "__v": 0
        },
        {
            "role": "user",
            "_id": "63b1650e4d851536885c49a5",
            "name": "User1",
            "email": "user1@gmail.com",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



## Product

Provides access to creating a product, deleting a product, updating a product, fetching all products and retrieving a single product.



### 1. Get Single Product


Fetch a single product using a **product ID**.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/products/63a85bc74aba221d7077c7d9
```



***More example Requests/Responses:***


#### I. Example Request: Get Single Product



***Body: None***



#### I. Example Response: Get Single Product
```js
{
    "product": {
        "price": 25999,
        "image": "/uploads/example.jpeg",
        "colours": [
            "#222"
        ],
        "featured": false,
        "freeShipping": false,
        "inventory": 15,
        "averageRating": 0,
        "numOfReviews": 0,
        "_id": "63a85bc74aba221d7077c7d9",
        "name": "accent chair",
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": "office",
        "user": "639cd211e80a891f7c9c6132",
        "createdAt": "2022-12-25T14:18:47.749Z",
        "updatedAt": "2022-12-25T14:18:47.749Z",
        "__v": 0,
        "reviews": [],
        "id": "63a85bc74aba221d7077c7d9"
    }
}
```


***Status Code:*** 200

<br>



### 2. Get All Products


Get all created products.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/products
```



***More example Requests/Responses:***


#### I. Example Request: Get All Products



***Body: None***



#### I. Example Response: Get All Products
```js
{
    "numberOfProducts": 5,
    "products": [
        {
            "price": 23999,
            "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
            "colours": [
                "#222"
            ],
            "featured": false,
            "freeShipping": false,
            "inventory": 15,
            "averageRating": 3,
            "numOfReviews": 5,
            "_id": "63a75345daeff6309cc007f9",
            "name": "Prouct 1",
            "company": "ikea",
            "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            "category": "bedroom",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-24T19:30:13.882Z",
            "updatedAt": "2022-12-25T08:46:44.479Z",
            "__v": 0,
            "reviews": [
                {
                    "_id": "63a779e66a35b63284860847",
                    "rating": 3.5,
                    "title": "lovely PRODUCT",
                    "product": "63a75345daeff6309cc007f9",
                    "comment": "A very good product",
                    "user": "639cd211e80a891f7c9c6132",
                    "createdAt": "2022-12-24T22:15:02.189Z",
                    "updatedAt": "2022-12-24T22:15:02.189Z",
                    "__v": 0
                },
                {
                    "_id": "63a77a376a35b63284860850",
                    "rating": 1.5,
                    "title": "BAD PRODUCT",
                    "product": "63a75345daeff6309cc007f9",
                    "comment": "A very good product",
                    "user": "639e522480622b0ad0df41c7",
                    "createdAt": "2022-12-24T22:16:23.926Z",
                    "updatedAt": "2022-12-24T22:16:23.926Z",
                    "__v": 0
                },
                {
                    "_id": "63a77aac796f9306d8e6a7ae",
                    "rating": 4.9,
                    "title": "WRONG PRODUCT",
                    "product": "63a75345daeff6309cc007f9",
                    "comment": "A very good product",
                    "user": "639cd226e80a891f7c9c6136",
                    "createdAt": "2022-12-24T22:18:20.839Z",
                    "updatedAt": "2022-12-24T22:18:20.839Z",
                    "__v": 0
                },
                {
                    "_id": "63a77b39e92f7135d8929b17",
                    "rating": 3.5,
                    "title": "MISPLACED PRODUCT from Michael",
                    "product": "63a75345daeff6309cc007f9",
                    "comment": "A very good product",
                    "user": "639e51b38cf9f1351897ff5b",
                    "createdAt": "2022-12-24T22:20:41.380Z",
                    "updatedAt": "2022-12-24T22:20:41.380Z",
                    "__v": 0
                },
                {
                    "_id": "63a80df3f3e839293c696330",
                    "rating": 1.39,
                    "title": "MISPLACED PRODUCT from Malachi",
                    "product": "63a75345daeff6309cc007f9",
                    "comment": "A very good product",
                    "user": "639e47e80b09670b1803ae8a",
                    "createdAt": "2022-12-25T08:46:43.739Z",
                    "updatedAt": "2022-12-25T08:46:43.739Z",
                    "__v": 0
                }
            ],
            "id": "63a75345daeff6309cc007f9"
        },
        {
            "price": 23999,
            "image": "uploads/example.jpeg",
            "colours": [
                "#222"
            ],
            "featured": false,
            "freeShipping": false,
            "inventory": 15,
            "averageRating": 0,
            "numOfReviews": 0,
            "_id": "63a85a36782da826686b52d4",
            "name": "Prouct 1",
            "company": "ikea",
            "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            "category": "bedroom",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-25T14:12:06.537Z",
            "updatedAt": "2022-12-25T14:12:06.537Z",
            "__v": 0,
            "reviews": [],
            "id": "63a85a36782da826686b52d4"
        },
        {
            "price": 25999,
            "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
            "colours": [
                "#222"
            ],
            "featured": false,
            "freeShipping": false,
            "inventory": 15,
            "averageRating": 0,
            "numOfReviews": 0,
            "_id": "63a85b44c271df2e64bda6ae",
            "name": "accent chair",
            "company": "marcos",
            "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            "category": "office",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-25T14:16:36.123Z",
            "updatedAt": "2022-12-25T14:16:36.123Z",
            "__v": 0,
            "reviews": [],
            "id": "63a85b44c271df2e64bda6ae"
        },
        {
            "price": 25999,
            "image": "uploads/example.jpeg",
            "colours": [
                "#222"
            ],
            "featured": false,
            "freeShipping": false,
            "inventory": 15,
            "averageRating": 0,
            "numOfReviews": 0,
            "_id": "63a85b8cc271df2e64bda6b1",
            "name": "accent chair",
            "company": "marcos",
            "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            "category": "office",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-25T14:17:48.383Z",
            "updatedAt": "2022-12-25T14:17:48.383Z",
            "__v": 0,
            "reviews": [],
            "id": "63a85b8cc271df2e64bda6b1"
        },
        {
            "price": 25999,
            "image": "/uploads/example.jpeg",
            "colours": [
                "#222"
            ],
            "featured": false,
            "freeShipping": false,
            "inventory": 15,
            "averageRating": 0,
            "numOfReviews": 0,
            "_id": "63a85bc74aba221d7077c7d9",
            "name": "accent chair",
            "company": "marcos",
            "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
            "category": "office",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-25T14:18:47.749Z",
            "updatedAt": "2022-12-25T14:18:47.749Z",
            "__v": 0,
            "reviews": [],
            "id": "63a85bc74aba221d7077c7d9"
        }
    ]
}
```


***Status Code:*** 200

<br>



### 3. Delete Product


Deletes a single product using a **product ID**.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:5000/api/v1/products/63a85bc74aba221d7077c7d9
```



***More example Requests/Responses:***


#### I. Example Request: Delete Product



***Body: None***



#### I. Example Response: Delete Product
```js
{
    "msg": "Success! Product removed"
}
```


***Status Code:*** 200

<br>



### 4. Update Product


Updates a single product using a **product ID**.


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/products/63a85b44c271df2e64bda6ae
```



***Body:***

```js        
{
        "rating": 3.5,
		"product": "639f80464f5a9f196c3a4338"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update Product



***Body:***

```js        
{
        "rating": 3.5,
		"product": "639f80464f5a9f196c3a4338"
}
```



#### I. Example Response: Update Product
```js
{
    "product": {
        "price": 25999,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "colours": [
            "#222"
        ],
        "featured": false,
        "freeShipping": false,
        "inventory": 15,
        "averageRating": 0,
        "numOfReviews": 0,
        "_id": "63a85b44c271df2e64bda6ae",
        "name": "accent chair",
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": "office",
        "user": "639cd211e80a891f7c9c6132",
        "createdAt": "2022-12-25T14:16:36.123Z",
        "updatedAt": "2023-01-01T11:00:12.864Z",
        "__v": 0,
        "id": "63a85b44c271df2e64bda6ae"
    }
}
```


***Status Code:*** 200

<br>



### 5. Get Single Product Reviews


Gets a single product using a **product ID**.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/products/63a75345daeff6309cc007f9/reviews
```



***More example Requests/Responses:***


#### I. Example Request: Get Single Product Reviews



***Body: None***



#### I. Example Response: Get Single Product Reviews
```js
{
    "count": 5,
    "reviews": [
        {
            "_id": "63a779e66a35b63284860847",
            "rating": 3.5,
            "title": "lovely PRODUCT",
            "product": "63a75345daeff6309cc007f9",
            "comment": "A very good product",
            "user": "639cd211e80a891f7c9c6132",
            "createdAt": "2022-12-24T22:15:02.189Z",
            "updatedAt": "2022-12-24T22:15:02.189Z",
            "__v": 0
        },
        {
            "_id": "63a77a376a35b63284860850",
            "rating": 1.5,
            "title": "BAD PRODUCT",
            "product": "63a75345daeff6309cc007f9",
            "comment": "A very good product",
            "user": "639e522480622b0ad0df41c7",
            "createdAt": "2022-12-24T22:16:23.926Z",
            "updatedAt": "2022-12-24T22:16:23.926Z",
            "__v": 0
        },
        {
            "_id": "63a77aac796f9306d8e6a7ae",
            "rating": 4.9,
            "title": "WRONG PRODUCT",
            "product": "63a75345daeff6309cc007f9",
            "comment": "A very good product",
            "user": "639cd226e80a891f7c9c6136",
            "createdAt": "2022-12-24T22:18:20.839Z",
            "updatedAt": "2022-12-24T22:18:20.839Z",
            "__v": 0
        },
        {
            "_id": "63a77b39e92f7135d8929b17",
            "rating": 3.5,
            "title": "MISPLACED PRODUCT from Michael",
            "product": "63a75345daeff6309cc007f9",
            "comment": "A very good product",
            "user": "639e51b38cf9f1351897ff5b",
            "createdAt": "2022-12-24T22:20:41.380Z",
            "updatedAt": "2022-12-24T22:20:41.380Z",
            "__v": 0
        },
        {
            "_id": "63a80df3f3e839293c696330",
            "rating": 1.39,
            "title": "MISPLACED PRODUCT from Malachi",
            "product": "63a75345daeff6309cc007f9",
            "comment": "A very good product",
            "user": "639e47e80b09670b1803ae8a",
            "createdAt": "2022-12-25T08:46:43.739Z",
            "updatedAt": "2022-12-25T08:46:43.739Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 6. Upload Image


Uploads the product image.


***Endpoint:***

```bash
Method: POST
Type: FORMDATA
URL: http://localhost:5000/api/v1/products/uploadImage
```



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



***More example Requests/Responses:***


#### I. Example Request: Upload Image



***Body:***

| Key | Value | Description |
| --- | ------|-------------|
| image |  |  |



#### I. Example Response: Upload Image
```js
{
    "image": "/uploads/oops_image.jpg"
}
```


***Status Code:*** 200

<br>



### 7. Create Product


Creates the product. All fields must be provided only the **colors** field is optional.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/products
```



***Body:***

```js        
{
    "name": "accent chair",
    "price": 25999,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
  }
```



***More example Requests/Responses:***


#### I. Example Request: Create Product



***Body:***

```js        
{
    "name": "accent chair",
    "price": 25999,
    "colors": ["#ff0000", "#00ff00", "#0000ff"],
    "company": "marcos",
    "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
    "category": "office"
  }
```



#### I. Example Response: Create Product
```js
{
    "product": {
        "price": 25999,
        "image": "/uploads/example.jpeg",
        "colours": [
            "#222"
        ],
        "featured": false,
        "freeShipping": false,
        "inventory": 15,
        "averageRating": 0,
        "numOfReviews": 0,
        "_id": "63b1683c4d851536885c49b9",
        "name": "accent chair",
        "company": "marcos",
        "description": "Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge",
        "category": "office",
        "user": "639cd211e80a891f7c9c6132",
        "createdAt": "2023-01-01T11:02:20.323Z",
        "updatedAt": "2023-01-01T11:02:20.323Z",
        "__v": 0,
        "id": "63b1683c4d851536885c49b9"
    }
}
```


***Status Code:*** 201

<br>



## Review

Provides access to make review about a product. A user can only make one review per product.



### 1. Get All Reviews


Get all reviews on the available product(s).


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/reviews
```



***More example Requests/Responses:***


#### I. Example Request: Get All Reviews



***Body: None***



#### I. Example Response: Get All Reviews
```js
{
    "reviews": [
        {
            "_id": "63a779e66a35b63284860847",
            "rating": 3.5,
            "title": "lovely PRODUCT",
            "product": {
                "price": 23999,
                "_id": "63a75345daeff6309cc007f9",
                "name": "Prouct 1",
                "company": "ikea",
                "id": "63a75345daeff6309cc007f9"
            },
            "comment": "A very good product",
            "user": {
                "_id": "639cd211e80a891f7c9c6132",
                "name": "jackie"
            },
            "createdAt": "2022-12-24T22:15:02.189Z",
            "updatedAt": "2022-12-24T22:15:02.189Z",
            "__v": 0
        },
        {
            "_id": "63a77a376a35b63284860850",
            "rating": 1.5,
            "title": "BAD PRODUCT",
            "product": {
                "price": 23999,
                "_id": "63a75345daeff6309cc007f9",
                "name": "Prouct 1",
                "company": "ikea",
                "id": "63a75345daeff6309cc007f9"
            },
            "comment": "A very good product",
            "user": {
                "_id": "639e522480622b0ad0df41c7",
                "name": "jack"
            },
            "createdAt": "2022-12-24T22:16:23.926Z",
            "updatedAt": "2022-12-24T22:16:23.926Z",
            "__v": 0
        },
        {
            "_id": "63a77aac796f9306d8e6a7ae",
            "rating": 4.9,
            "title": "WRONG PRODUCT",
            "product": {
                "price": 23999,
                "_id": "63a75345daeff6309cc007f9",
                "name": "Prouct 1",
                "company": "ikea",
                "id": "63a75345daeff6309cc007f9"
            },
            "comment": "A very good product",
            "user": {
                "_id": "639cd226e80a891f7c9c6136",
                "name": "simbi"
            },
            "createdAt": "2022-12-24T22:18:20.839Z",
            "updatedAt": "2022-12-24T22:18:20.839Z",
            "__v": 0
        },
        {
            "_id": "63a77b39e92f7135d8929b17",
            "rating": 3.5,
            "title": "MISPLACED PRODUCT from Michael",
            "product": {
                "price": 23999,
                "_id": "63a75345daeff6309cc007f9",
                "name": "Prouct 1",
                "company": "ikea",
                "id": "63a75345daeff6309cc007f9"
            },
            "comment": "A very good product",
            "user": {
                "_id": "639e51b38cf9f1351897ff5b",
                "name": "michael"
            },
            "createdAt": "2022-12-24T22:20:41.380Z",
            "updatedAt": "2022-12-24T22:20:41.380Z",
            "__v": 0
        },
        {
            "_id": "63a80df3f3e839293c696330",
            "rating": 1.39,
            "title": "MISPLACED PRODUCT from Malachi",
            "product": {
                "price": 23999,
                "_id": "63a75345daeff6309cc007f9",
                "name": "Prouct 1",
                "company": "ikea",
                "id": "63a75345daeff6309cc007f9"
            },
            "comment": "A very good product",
            "user": {
                "_id": "639e47e80b09670b1803ae8a",
                "name": "malachi"
            },
            "createdAt": "2022-12-25T08:46:43.739Z",
            "updatedAt": "2022-12-25T08:46:43.739Z",
            "__v": 0
        }
    ],
    "count": 5
}
```


***Status Code:*** 200

<br>



### 2. Get Single Review


Gets a single review about a product using a **review ID**.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/reviews/63a77a376a35b63284860850
```



***More example Requests/Responses:***


#### I. Example Request: Get Single Review



***Body: None***



#### I. Example Response: Get Single Review
```js
{
    "review": {
        "_id": "63a77a376a35b63284860850",
        "rating": 1.5,
        "title": "BAD PRODUCT",
        "product": {
            "price": 23999,
            "_id": "63a75345daeff6309cc007f9",
            "name": "Prouct 1",
            "company": "ikea",
            "id": "63a75345daeff6309cc007f9"
        },
        "comment": "A very good product",
        "user": {
            "_id": "639e522480622b0ad0df41c7",
            "name": "jack"
        },
        "createdAt": "2022-12-24T22:16:23.926Z",
        "updatedAt": "2022-12-24T22:16:23.926Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 3. Update Review


Updates a review about a product using a **review ID**.


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/reviews/63a77a376a35b63284860850
```



***Body:***

```js        
{
        "rating": 3.1,
		"title": "bad product",
		"comment": "Not what i ordered. I'm so so so sad"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update Review



***Body:***

```js        
{
        "rating": 3.1,
		"title": "bad product",
		"comment": "Not what i ordered. I'm so so so sad"
}
```



#### I. Example Response: Update Review
```js
{
    "review": {
        "_id": "63a77a376a35b63284860850",
        "rating": 3.1,
        "title": "bad product",
        "product": "63a75345daeff6309cc007f9",
        "comment": "Not what i ordered. I'm so so so sad",
        "user": "639e522480622b0ad0df41c7",
        "createdAt": "2022-12-24T22:16:23.926Z",
        "updatedAt": "2023-01-01T11:07:46.195Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 4. Delete Review


Deletes a single review about a product using a **review ID**.


***Endpoint:***

```bash
Method: DELETE
Type: 
URL: http://localhost:5000/api/v1/reviews/63a77a376a35b63284860850
```



***More example Requests/Responses:***


#### I. Example Request: Delete Review



***Body: None***



#### I. Example Response: Delete Review
```js
{
    "msg": "success! review removed"
}
```


***Status Code:*** 200

<br>



### 5. Create Review


Creates a review on a product. The **product ID**, **title**, **comment** and **rating** must be provided.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/reviews
```



***Body:***

```js        
{
        "rating": 1.39,
		"title": "Good Product",
		"product": "63a75345daeff6309cc007f9",
		"comment": "Exactly what i ordered"
}
```



***More example Requests/Responses:***


#### I. Example Request: Create Review



***Body:***

```js        
{
        "rating": 1.39,
		"title": "Good Product",
		"product": "63a75345daeff6309cc007f9",
		"comment": "Exactly what i ordered"
}
```



#### I. Example Response: Create Review
```js
{
    "msg": "Already submitted review for the product"
}
```


***Status Code:*** 400

<br>



## Order



### 1. Get All Orders


Get the orders placed on a product(s).


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/orders
```



***More example Requests/Responses:***


#### I. Example Request: Get All Orders



***Body: None***



#### I. Example Response: Get All Orders
```js
{
    "numOfOrders": 7,
    "orders": [
        {
            "status": "pending",
            "_id": "63a8884d322c4922143fc812",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a8884d322c4922143fc813",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "017030459eaa1cc0a27bc4a90bf9247f",
            "createdAt": "2022-12-25T17:28:45.996Z",
            "updatedAt": "2022-12-25T17:28:45.996Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a8892e05ce0718f8323d60",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a8892e05ce0718f8323d61",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "5229e20d4cbef8a10efeb03de923a326",
            "createdAt": "2022-12-25T17:32:30.495Z",
            "updatedAt": "2022-12-25T17:32:30.495Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a889808510830204398d6c",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a889818510830204398d6d",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "b86f486a547ef33d0a30cbcca014e3c3",
            "createdAt": "2022-12-25T17:33:53.027Z",
            "updatedAt": "2022-12-25T17:33:53.027Z",
            "__v": 0
        },
        {
            "status": "paid",
            "_id": "63a88b8b8510830204398d74",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 935961,
            "total": 936859,
            "orderItems": [
                {
                    "_id": "63a88b8b8510830204398d75",
                    "name": "Prouct 1",
                    "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
                    "price": 23999,
                    "amount": 34,
                    "product": "63a75345daeff6309cc007f9"
                },
                {
                    "_id": "63a88b8b8510830204398d76",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                },
                {
                    "_id": "63a88b8b8510830204398d77",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 2,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "1f99bb85362a4f47f9222695ce95a298",
            "createdAt": "2022-12-25T17:42:35.820Z",
            "updatedAt": "2022-12-25T18:51:39.713Z",
            "__v": 0,
            "paymentIntentId": "abbatt5779wchje6euejghfmjh"
        },
        {
            "status": "pending",
            "_id": "63a89898f9081b21accde100",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 71997,
            "total": 72895,
            "orderItems": [
                {
                    "_id": "63a89898f9081b21accde101",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd226e80a891f7c9c6136",
            "clientSecret": "728e2bad54834c502bf1af6e722089c1",
            "createdAt": "2022-12-25T18:38:16.712Z",
            "updatedAt": "2022-12-25T18:38:16.712Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a898fc1f85af2ccca2ff1f",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 71997,
            "total": 72895,
            "orderItems": [
                {
                    "_id": "63a898fc1f85af2ccca2ff20",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd226e80a891f7c9c6136",
            "clientSecret": "58287dea037a0d591931c64467d50818",
            "createdAt": "2022-12-25T18:39:56.976Z",
            "updatedAt": "2022-12-25T18:39:56.976Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a8994d1f85af2ccca2ff26",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 71997,
            "total": 72895,
            "orderItems": [
                {
                    "_id": "63a8994d1f85af2ccca2ff27",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd226e80a891f7c9c6136",
            "clientSecret": "eb81cf8a1bf8ef9af4369e48f76a7cef",
            "createdAt": "2022-12-25T18:41:17.498Z",
            "updatedAt": "2022-12-25T18:41:17.498Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



### 2. Get Single Order


Gets a single order using the **order ID**.


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/orders/63a8884d322c4922143fc812
```



***More example Requests/Responses:***


#### I. Example Request: Get Single Order



***Body: None***



#### I. Example Response: Get Single Order
```js
{
    "order": {
        "status": "pending",
        "_id": "63a8884d322c4922143fc812",
        "tax": 399,
        "shippingFee": 499,
        "subtotal": 883966,
        "total": 884864,
        "orderItems": [
            {
                "_id": "63a8884d322c4922143fc813",
                "name": "accent chair",
                "image": "/uploads/example.jpeg",
                "price": 25999,
                "amount": 34,
                "product": "63a85bc74aba221d7077c7d9"
            }
        ],
        "user": "639cd211e80a891f7c9c6132",
        "clientSecret": "017030459eaa1cc0a27bc4a90bf9247f",
        "createdAt": "2022-12-25T17:28:45.996Z",
        "updatedAt": "2022-12-25T17:28:45.996Z",
        "__v": 0
    }
}
```


***Status Code:*** 200

<br>



### 3. Create Order


Creates an order. The **tax**, **shipping fee**, and **product ID** must be provided.


***Endpoint:***

```bash
Method: POST
Type: RAW
URL: http://localhost:5000/api/v1/orders
```



***Body:***

```js        

  {
    "tax": 399,
    "shippingFee": 499,
    "items": [
       {
        "name": "bed",
        "price": 2699,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 3,
        "product": "63a85a36782da826686b52d4"
      }
    ]
  }


```



***More example Requests/Responses:***


#### I. Example Request: Create Order



***Body:***

```js        

  {
    "tax": 399,
    "shippingFee": 499,
    "items": [
       {
        "name": "bed",
        "price": 2699,
        "image": "https://dl.airtable.com/.attachmentThumbnails/e8bc3791196535af65f40e36993b9e1f/438bd160",
        "amount": 3,
        "product": "63a85a36782da826686b52d4"
      }
    ]
  }


```



#### I. Example Response: Create Order
```js
{
    "order": {
        "status": "pending",
        "_id": "63b16b784d851536885c49d0",
        "tax": 399,
        "shippingFee": 499,
        "subtotal": 71997,
        "total": 72895,
        "orderItems": [
            {
                "_id": "63b16b784d851536885c49d1",
                "name": "Prouct 1",
                "image": "uploads/example.jpeg",
                "price": 23999,
                "amount": 3,
                "product": "63a85a36782da826686b52d4"
            }
        ],
        "user": "639cd211e80a891f7c9c6132",
        "clientSecret": "19b73cc301d780a23680f37aae4ab881",
        "createdAt": "2023-01-01T11:16:08.195Z",
        "updatedAt": "2023-01-01T11:16:08.195Z",
        "__v": 0
    },
    "clientSecret": "19b73cc301d780a23680f37aae4ab881"
}
```


***Status Code:*** 201

<br>



### 4. Update Order


This route is used to update the product **paymentIntentId** to indicate that the product has been successfully ordered. The product **status** property is changed to **paid.** The **order ID** and **paymentIntentId** field must be provided.


***Endpoint:***

```bash
Method: PATCH
Type: RAW
URL: http://localhost:5000/api/v1/orders/63a88b8b8510830204398d74
```



***Body:***

```js        
{
	"paymentIntentId": "abbatt5779wchje6euejghfmjh"
}
```



***More example Requests/Responses:***


#### I. Example Request: Update Order



***Body:***

```js        
{
	"paymentIntentId": "abbatt5779wchje6euejghfmjh"
}
```



#### I. Example Response: Update Order
```js
{
    "order": {
        "status": "paid",
        "_id": "63a88b8b8510830204398d74",
        "tax": 399,
        "shippingFee": 499,
        "subtotal": 935961,
        "total": 936859,
        "orderItems": [
            {
                "_id": "63a88b8b8510830204398d75",
                "name": "Prouct 1",
                "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
                "price": 23999,
                "amount": 34,
                "product": "63a75345daeff6309cc007f9"
            },
            {
                "_id": "63a88b8b8510830204398d76",
                "name": "Prouct 1",
                "image": "uploads/example.jpeg",
                "price": 23999,
                "amount": 3,
                "product": "63a85a36782da826686b52d4"
            },
            {
                "_id": "63a88b8b8510830204398d77",
                "name": "Prouct 1",
                "image": "uploads/example.jpeg",
                "price": 23999,
                "amount": 2,
                "product": "63a85a36782da826686b52d4"
            }
        ],
        "user": "639cd211e80a891f7c9c6132",
        "clientSecret": "1f99bb85362a4f47f9222695ce95a298",
        "createdAt": "2022-12-25T17:42:35.820Z",
        "updatedAt": "2022-12-25T18:51:39.713Z",
        "__v": 0,
        "paymentIntentId": "abbatt5779wchje6euejghfmjh"
    }
}
```


***Status Code:*** 200

<br>



### 5. Show Current User Orders


Show the current user order(s).


***Endpoint:***

```bash
Method: GET
Type: 
URL: http://localhost:5000/api/v1/orders/showAllMyOrders
```



***More example Requests/Responses:***


#### I. Example Request: Show Current User Orders



***Body: None***



#### I. Example Response: Show Current User Orders
```js
{
    "numOfOrders": 5,
    "orders": [
        {
            "status": "pending",
            "_id": "63a8884d322c4922143fc812",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a8884d322c4922143fc813",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "017030459eaa1cc0a27bc4a90bf9247f",
            "createdAt": "2022-12-25T17:28:45.996Z",
            "updatedAt": "2022-12-25T17:28:45.996Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a8892e05ce0718f8323d60",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a8892e05ce0718f8323d61",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "5229e20d4cbef8a10efeb03de923a326",
            "createdAt": "2022-12-25T17:32:30.495Z",
            "updatedAt": "2022-12-25T17:32:30.495Z",
            "__v": 0
        },
        {
            "status": "pending",
            "_id": "63a889808510830204398d6c",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 883966,
            "total": 884864,
            "orderItems": [
                {
                    "_id": "63a889818510830204398d6d",
                    "name": "accent chair",
                    "image": "/uploads/example.jpeg",
                    "price": 25999,
                    "amount": 34,
                    "product": "63a85bc74aba221d7077c7d9"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "b86f486a547ef33d0a30cbcca014e3c3",
            "createdAt": "2022-12-25T17:33:53.027Z",
            "updatedAt": "2022-12-25T17:33:53.027Z",
            "__v": 0
        },
        {
            "status": "paid",
            "_id": "63a88b8b8510830204398d74",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 935961,
            "total": 936859,
            "orderItems": [
                {
                    "_id": "63a88b8b8510830204398d75",
                    "name": "Prouct 1",
                    "image": "https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b",
                    "price": 23999,
                    "amount": 34,
                    "product": "63a75345daeff6309cc007f9"
                },
                {
                    "_id": "63a88b8b8510830204398d76",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                },
                {
                    "_id": "63a88b8b8510830204398d77",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 2,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "1f99bb85362a4f47f9222695ce95a298",
            "createdAt": "2022-12-25T17:42:35.820Z",
            "updatedAt": "2022-12-25T18:51:39.713Z",
            "__v": 0,
            "paymentIntentId": "abbatt5779wchje6euejghfmjh"
        },
        {
            "status": "pending",
            "_id": "63b16b784d851536885c49d0",
            "tax": 399,
            "shippingFee": 499,
            "subtotal": 71997,
            "total": 72895,
            "orderItems": [
                {
                    "_id": "63b16b784d851536885c49d1",
                    "name": "Prouct 1",
                    "image": "uploads/example.jpeg",
                    "price": 23999,
                    "amount": 3,
                    "product": "63a85a36782da826686b52d4"
                }
            ],
            "user": "639cd211e80a891f7c9c6132",
            "clientSecret": "19b73cc301d780a23680f37aae4ab881",
            "createdAt": "2023-01-01T11:16:08.195Z",
            "updatedAt": "2023-01-01T11:16:08.195Z",
            "__v": 0
        }
    ]
}
```


***Status Code:*** 200

<br>



---
[Back to top](#e-commerce-api)

>Generated at 2023-01-01 13:40:14 by [docgen](https://github.com/thedevsaddam/docgen)
