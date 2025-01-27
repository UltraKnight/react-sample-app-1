# Sample React App with Redux-Saga and Routing

This is a simple React application that demonstrates how to use **Redux-Saga** for handling side effects, **React Router** for routing, and basic **authentication flow** (simulated). The app also includes an example of how to apply inline styles using React's `style` prop, handle state updates, and manage navigation after user authentication.

The purpose of this app is to provide a working example where you can experiment with various concepts, including:
- Using **Redux** and **Redux-Saga** for managing state and side effects.
- Implementing **React Router** for handling navigation.
- Handling **authentication** and conditional rendering based on the user's login status.

## Features:
- **Login Flow**: A simple form where users can "log in" (simulated).
- **Redux-Saga**: Used to handle async side effects like login simulation.
- **Routing**: Uses **React Router** to navigate between pages (login and dashboard).
- **State Management**: Uses **Redux** for global state management, specifically for handling user authentication.

## Technologies Used:
- **React**: Frontend framework.
- **Redux**: State management.
- **Redux-Saga**: Middleware for handling side effects (e.g., API calls, async operations).
- **React Router**: For navigation between pages.
- **TypeScript**: For type safety.
- **CSS-in-JS**: Inline styling and margin manipulations.

## How to Run the App:

1. **Clone the Repository**:
   First, clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/sample-react-app.git

2. **Navigate to the Project Folder: Change to the directory where the app is located**:
`cd sample-react-app`

3. **Install Dependencies: Make sure you have npm installed. Install the project dependencies**:
`npm install`

4. **Run the App: To start the development server and view the app in your browser, run**:
`npm run dev`

This will start the app at http://localhost:5173.

## App Structure:

* src/components/: Contains the main React components like Login, Dashboard, and any other UI components.
* src/store/: Contains Redux-related files (actions, reducers, store).
* src/sagas/: Contains Redux-Saga functions to handle async operations (e.g., login logic).
* src/styles/: Contains any styling files (CSS, inline styles).
* src/App.tsx: Main app component that sets up routing.

## How the App Works:
### Authentication:
When the user enters credentials and clicks "Login", the loginSuccess action is dispatched.
The loginSaga listens for this action and simulates a successful login, updating the Redux state (isAuthenticated) to true.

After the state is updated, the component listens for the isAuthenticated state change using useSelector and navigates to the /dashboard page.

### Routing:
React Router handles navigation between the Login and Dashboard pages.
Once authenticated, the user is redirected to the /dashboard.

### Sagas:
Redux-Saga manages side effects like the login simulation (API call) and dispatches success or failure actions based on the response.
The login action is handled asynchronously by loginSaga and updates the Redux store accordingly.

### Notes:
The login functionality is simulated; no real authentication or API calls are made.
The isAuthenticated state in Redux controls the user's login state and is used for conditional rendering and routing.

The app is a minimal example to experiment with Redux, Redux-Saga, and React Router. You can extend the app by adding more features like form validation, actual API calls, or other state management techniques.

### To Do:
Implement real authentication API calls.
Add better error handling and user feedback for the login process.
Experiment with more complex Redux-Saga side effects.

## License:
MIT License
