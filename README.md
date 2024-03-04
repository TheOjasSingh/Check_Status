
# Card Status Service

This repository contains a simple Node.js service that provides an internal API for retrieving the status of a user's card. The service uses SQLite as the database to store card status information and is designed to be deployed using Docker.


## Approach
The approach involves creating a basic web service using Node.js and Express, with SQLite as the database for storing card status information. The service exposes an endpoint /get_card_status that takes a card ID or phone number as a query parameter and returns the corresponding card's status.
## Why Node and Express

Node.js and Express were chosen for their simplicity, scalability, and efficiency in building lightweight and fast web services. These technologies are well-suited for building microservices and APIs.
## Tech Stack

**DataBase:** SQLite3

**Server:** Node, Express 

**Deployment:** Docker


## Run Locally



Install dependencies

```bash
  npm install
```

Populate Database

```bash
  node ingestData.js
```
Run the Service

```bash
  node index.js
```

Access the Service

```bash
  http://localhost:3000/get_card_status?identifier={card ID or phone number}
```

## Possible Improvement

**Security:** Implement proper input validation and sanitation to prevent SQL injection and other security vulnerabilities.

**Logging:** Enhance logging for better debugging and monitoring.

**Testing:** Implement unit tests and integration tests to ensure the reliability of the service.

**Scalability:** Consider scalability aspects and explore options for load balancing and clustering in a production environment.