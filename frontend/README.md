# React Help Center

![Screenshot (4)](https://github.com/user-attachments/assets/827b26d2-7e88-47a3-b8a1-ff91dea7fa91)

## Project Overview

Welcome to the **React Help Center** project! This application provides a user interface to search and view cards of various topics or services. It features a search bar that allows users to query card data, which is fetched from a backend API. The app includes a header, footer, and a main content area where search results are displayed.

## Features

- **Search Functionality:** Users can search for cards by typing into the search bar and pressing "Enter" or clicking the search icon.
- **Dynamic Results:** Cards are fetched and filtered based on user queries.
- **Loading State:** Displays a loading state while fetching data from the API.
- **Responsive Design:** The application is styled to be responsive and user-friendly.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Axios:** HTTP client for making API requests.
- **Lodash:** Utility library for debouncing search requests.
- **CSS:** Styling for the application.
- **Fetch API:** Used for initial data fetch.

![Screenshot (5)](https://github.com/user-attachments/assets/4331dc82-d783-407c-a8a7-be1615aac1be)


![Screenshot (6)](https://github.com/user-attachments/assets/3d726d96-d6d1-4244-b33a-a92e1eff0ead)

## Getting Started

To get started with this project, follow the steps below.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)

- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (package manager)

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

   Or using Yarn:

   ```bash
   yarn install
   ```

### Running the Development Server

To start the development server, use:

Using npm:

```bash
npm start
```

Or using Yarn:

```bash
yarn start
```

This will start a local server and open the application in your default web browser at `http://localhost:3000`.

### Building for Production

To create a production build, run:

Using npm:

```bash
npm run build
```

Or using Yarn:

```bash
yarn build
```

This will generate optimized production-ready files in the `build` directory.

## Key Functions

- **Fetching Data:** On component mount, card data is fetched from the backend API and stored in the `filteredCards` state.
- **Search Handling:** The search bar allows users to query card data. Debounced search requests are made to improve performance.
- **Error Handling:** Provides basic error handling for API requests and search queries.

## Contributing

We welcome contributions to this project! Please refer to our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute.
