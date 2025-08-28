# API Documentation

This document provides documentation for the API endpoints in the server.

## Authentication

### Register

*   **Endpoint:** `POST /register`
*   **Method:** `POST`
*   **Description:** Registers a new user.
*   **Request Body:**
    *   `email` (string, required): The user's email address.
    *   `password` (string, required): The user's password (must be at least 5 characters long).
*   **Success Response:**
    *   **Code:** 201
    *   **Content:**
        ```json
        {
          "message": "User registered successfully",
          "user": {
            "id": 1,
            "email": "user@example.com"
          }
        }
        ```
*   **Error Response:**
    *   **Code:** 409
    *   **Content:**
        ```json
        {
          "message": "User already exists"
        }
        ```

### Login

*   **Endpoint:** `POST /login`
*   **Method:** `POST`
*   **Description:** Logs in an existing user.
*   **Request Body:**
    *   `email` (string, required): The user's email address.
    *   `password` (string, required): The user's password.
*   **Success Response:**
    *   **Code:** 200
    *   **Content:**
        ```json
        {
          "message": "User logged in successfully",
          "user": {
            "email": "user@example.com",
            "token": "some-random-token"
          }
        }
        ```
*   **Error Responses:**
    *   **Code:** 401 (User not found)
    *   **Content:**
        ```json
        {
          "message": "User not found"
        }
        ```
    *   **Code:** 401 (Incorrect password)
    *   **Content:**
        ```json
        {
          "message": "Password is incorrect"
        }
        ```

### Logout

*   **Endpoint:** `DELETE /logout/:email`
*   **Method:** `DELETE`
*   **Description:** Logs out a user.
*   **URL Parameters:**
    *   `email` (string, required): The email of the user to log out.
*   **Success Response:**
    *   **Code:** 200
    *   **Content:**
        ```json
        {
          "message": "User logged out successfully"
        }
        ```
*   **Error Response:**
    *   **Code:** 404
    *   **Content:**
        ```json
        {
          "message": "User not found"
        }
        ```
