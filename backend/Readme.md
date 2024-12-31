# /user/register Endpoint

## Description
Registers a new user with the provided credentials.

## Method & Endpoint
**POST** `/user/register`

## Required Data
- **username** (string, required)
- **email** (string, valid email, required)
- **password** (string, minimum 6 characters, required)

## Possible Status Codes
- **201**: User registration successful
- **400**: Validation error (e.g., missing required fields)
- **500**: Internal server error

## Example Response
```json
{
  "token": "sample_token_here",
  "newUser": {
    "_id": "unique_user_id_here",
    "username": "john_doe",
    "email": "john@example.com",
    "password": "hashed_password_value"
  }
}
```

# /user/login Endpoint

## Description
Logs in a user with the provided credentials.

## Method & Endpoint
**POST** `/user/login`

## Required Data
- **email** (string, valid email, required)
- **password** (string, minimum 6 characters, required)

## Possible Status Codes
- **200**: User login successful
- **400**: Validation error (e.g., missing required fields)
- **401**: Invalid email or password
- **500**: Internal server error

## Example Response
```json
{
  "token": "sample_token_here",
  "user": {
    "_id": "unique_user_id_here",
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

# /user/logout Endpoint

## Description
Logs out a user by blacklisting the provided token.

## Method & Endpoint
**POST** `/user/logout`

## Required Data
- **token** (string, required)

## Possible Status Codes
- **200**: User logout successful
- **400**: Validation error (e.g., missing required fields)
- **500**: Internal server error

## Example Response
```json
{
  "message": "Logout successful"
}
```

# /user/profile Endpoint

## Description
Retrieves the profile of the authenticated user.

## Method & Endpoint
**GET** `/user/profile`

## Required Data
- **Authorization Token** (string, required) - Should be provided via cookies or the `Authorization` header.

## Possible Status Codes
- **200**: Profile retrieved successfully  
- **401**: Unauthorized (e.g., missing or invalid token)  
- **500**: Internal server error  

## Example Response
```json
{
  "_id": "unique_user_id_here",
  "username": "john_doe",
  "email": "john@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "friends": [
    "friend_id_1",
    "friend_id_2"
  ]
}
```

# /user/addfriend Endpoint

## Description
Adds a user as a friend.

## Method & Endpoint
**POST** `/user/addfriend`

## Required Data
- **friendUserName** (string, required) - The username of the user to add as a friend.

## Possible Status Codes
- **200**: Friend added successfully
- **400**: Validation error (e.g., missing friendUserName, already friends)
- **401**: Unauthorized (e.g., missing or invalid token)
- **404**: User not found (if friendUserName does not exist)
- **500**: Internal server error

## Example Response
```json
{
  "message": "Friend added successfully"
}
```

# /user/getfriends Endpoint

## Description
Retrieves the list of friends of the authenticated user.

## Method & Endpoint
**GET** `/user/getfriends`

## Required Data
- **Authorization Token** (string, required) - Should be provided via cookies or the `Authorization` header.

## Possible Status Codes
- **200**: Friends retrieved successfully
- **401**: Unauthorized (e.g., missing or invalid token)
- **404**: User not found
- **500**: Internal server error

## Example Response
```json
[
  "friend_username_1",
  "friend_username_2",
  "friend_username_3"
]
```