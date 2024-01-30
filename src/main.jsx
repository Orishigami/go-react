import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ItemsList from "./component/itemList/ItemsList.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import StudentList from "./component/StudentList/StudentList.jsx";
import SubjectsList from "./component/subjects/SubjectsList.jsx";
import Item from "./component/Item/index.jsx";
import ItemFormFind from "./component/ItemFormFind/index.jsx";
import StudentFormFind from "./component/studentFormFind/index.jsx";
import SubjectFormFind from "./component/SubjectFormFind/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <ItemFormFind />
      <StudentFormFind />
      <SubjectFormFind />
      <ItemsList />
      <StudentList />
      <SubjectsList />
    </ThemeProvider>
  </React.StrictMode>
);
