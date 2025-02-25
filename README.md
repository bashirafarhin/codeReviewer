# Code Reviewer Application

This project is dedicated to performing code reviews to ensure code quality, maintainability, and adherence to coding standards.

- Identify potential bugs and errors.
- Ensure code readability and maintainability.
- Enforce coding standards and best practices.
- Share knowledge and improve overall code quality.

## Demo

## Frontend

-   React
-   Vite
-   Axios
-   Prism.js
-   React Markdown
-   rehype-highlight
-   react-simple-code-editor

## Backend

-   Node.js
-   Express
-   cors
-   dotenv
-   Google Generative AI

### Frontend Setup

1.  Navigate to the `Frontend` directory:

    ```sh
    cd Frontend
    ```
2.  Install dependencies:

    ```sh
    npm install
    ```
3.  Create a `.env` file in the `Frontend` directory and add the API URL:

    ```.env
    VITE_SERVER_API=http://localhost:8000/api
    ```
4.  To start the development server, run:
This will start the frontend development server, usually on http://localhost:5173.

    ```sh
    npm run dev
    ```

### Backend Setup

1.  Navigate to the `BackEnd` directory:

    ```sh
    cd BackEnd
    ```

2.  Install dependencies:

    ```sh
    npm install
    ```

3.  Create a `.env` file in the `BackEnd` directory and add the Google Gemini API key and the port:

    ```.env
    GOOGLE_GEMINI_KEY=YOUR_GOOGLE_GEMINI_API_KEY
    PORT=8000
    ```
4. To start the backend server, run:
   The server will start on the specified port.
   ```sh
   node server.js
   ```

### API Endpoints

-   `POST /api/ai/get-review`: Accepts a code snippet in the request body and returns a code review from the AI.

## Project Structure

```

├── BackEnd/
│   ├── .env
│   ├── package.json
│   ├── server.js
│   ├── src/
│   │   ├── app.js
│   │   ├── controllers/
│   │   │   └── ai.controller.js
│   │   ├── routes/
│   │   │   └── ai.routes.js
│   │   └── services/
│   │       └── ai.service.js
├── Frontend/
│   ├── .env
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── public/
│   │   ├── code review.png
│   │   └── logo.png
│   ├── README.md
│   ├── src/
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── assets/
│   │   │   └── react.svg
│   │   ├── index.css
│   │   ├── Loader/
│   │   │   ├── Loader.css
│   │   │   └── Loader.jsx
│   │   └── main.jsx
│   └── vite.config.js
└── .gitignore
```