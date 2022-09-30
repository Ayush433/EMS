import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import User from "./Dashboard/User";
import WidgetSm from "./Dashboard/Widgetsm";
import Login from "./LoginForm/Login";
import FeaturedInfo from "./Dashboard/FeaturedInfo";
import UserList from "./Dashboard/UserList";
import NewEmployee from "./Dashboard/NewEmployee";
import Report from "./Dashboard/Report";

import DashboardHome from "./Dashboard/DashboardHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/edit-profile" element={<User />} />
        <Route path="/user" element={<NewEmployee />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
