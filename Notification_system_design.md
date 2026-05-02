# Notification System Design

# 1. Overview

This project demonstrates a simple notification logging system where frontend events are captured and sent to a logging API.

The system consists of:

* Frontend (React App)
* Logging Middleware
* External Logging API

---

## 2. System Architecture

Frontend (React)
↓
Logging Middleware (log.js)
↓
External Logging API

---

## 3. Components

### 3.1 Frontend

* Built using React
* Provides a button to trigger log events
* Calls the logging middleware function

### 3.2 Logging Middleware

* Implemented in `log.js`
* Uses Axios to send POST requests
* Adds Authorization token in headers

### 3.3 External API

* Handles registration, authentication, and logging
* Stores and processes log data


## 4. Workflow

1. User clicks "Send Log" button
2. Frontend calls `Log()` function
3. Middleware sends POST request to logging API
4. API validates token and stores log


## 5. API Flow

* Register → Get clientID & clientSecret
* Authenticate → Get access_token
* Send Logs → Use token to send log data

## 6. Challenges Faced

* CORS issue while calling API from browser
* Token expiration causing authentication errors

## 7. Conclusion
The system successfully demonstrates frontend-based logging using API integration.
All APIs were tested successfully using Postman, and frontend integration was implemented correctly.

The system successfully demonstrates frontend-based logging using API integration.
All APIs were tested successfully using Postman, and frontend integration was implemented correctly.
