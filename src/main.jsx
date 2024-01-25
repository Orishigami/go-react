import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ItemsList from "./component/itemList/ItemsList.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import StudentList from "./component/StudentList/StudentList.jsx";
import SubjectsList from "./component/subjects/SubjectsList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ItemsList />
      <StudentList />
      <SubjectsList />
    </ThemeProvider>
  </React.StrictMode>
);
