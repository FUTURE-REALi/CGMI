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