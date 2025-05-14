⚠️ Important Note on Running the Project
This is a full-stack project with a React frontend and a Node.js/Express backend.

By default, the React frontend runs on port 3000, and the Express backend runs on port 5000.

If someone clones or forks this repository and tries to run the project using only node index.js or npm start, only the backend will start on port 5000. The frontend will not be available unless it is started separately.

To run the full project properly, the user needs to:

Open two terminal windows.

In the first terminal, go to the backend folder (for example, "server"), install the dependencies, and start the Node.js server. This will run the backend on http://localhost:5000.

In the second terminal, go to the frontend folder (for example, "client"), install the dependencies, and start the React app. This will run the frontend on http://localhost:3000.
