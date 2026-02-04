import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthContextProvider } from "./dataStorage/Auth-context.jsx";
// import {initializeApp} from "firebase/app";
// import { getDatabase } from "firebase/database";
// import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwVXqD3xNN0dZwC0ftoPuK9cWTUkuiicg",
  authDomain: "react-project-96b8b.firebaseapp.com",
  databaseURL: "https://react-project-96b8b-default-rtdb.firebaseio.com",
  projectId: "react-project-96b8b",
  storageBucket: "react-project-96b8b.appspot.com",
  messagingSenderId: "828567788931",
  appId: "1:828567788931:web:837feaf113c59f2c29eab6",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// console.log(database);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
