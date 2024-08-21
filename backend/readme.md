# Node.js Help Cards API 

### Deployed Link
https://fullstack-assignment-7599.onrender.com/cards/

## Project Overview

Welcome to the **Help Cards API** project! This Node.js backend application provides an API for managing and retrieving help card data. It uses MongoDB for data storage and Express for handling HTTP requests. The application includes basic routes for fetching card information and a simple health check endpoint.

## Features

- **API Endpoint for Cards:** Provides routes for managing and retrieving help card data.
- **Health Check Endpoint:** Verifies if the server is running.
- **MongoDB Integration:** Connects to MongoDB for data storage.

## Technologies Used

- **Node.js:** JavaScript runtime for building server-side applications.
- **Express:** Web framework for Node.js, used for building the API.
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
- **body-parser:** Middleware for parsing incoming request bodies.
- **dotenv:** Module for loading environment variables from a `.env` file.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (for local development, or access to a MongoDB cloud instance)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd your-repo
   ```

3. **Install the dependencies:**

   Using npm:

   ```bash
   npm install
   ```

### Environment Configuration

1. Create a `.env` file in the root directory of the project.
2. Add your MongoDB connection string to the `.env` file:

   ```
   MONGO_URI=your_mongodb_connection_string
   ```

### Running the Server

To start the server, use:

```bash
npm start
```

The server will start and listen on port 3000.

### API Endpoints

- **GET /ping**

  Verifies if the server is running.

  **Response:**

  ```json
  "Server is running"
  ```

- **GET /cards**

  (Assumes `helpCardsRoutes` is defined and includes routes for card-related operations.)

  Retrieve card data from the backend.

## Project Structure

- `src/`
  - `routes/`
    - `helpCards.js`: Contains routes for managing help cards.
  - `app.js`: Main application file that sets up the server and connects to MongoDB.
- `.env`: Contains environment variables like the MongoDB connection string.
- `package.json`: Project metadata and dependencies.

## Contributing

We welcome contributions to this project! Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.
