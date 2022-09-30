import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import "../styles/Layout.css";

import { renderActionsCell } from "@mui/x-data-grid";
import ProtectedRoute from "./ProtectedRoute";

export default function Layout({ children }) {
  return (
    <ProtectedRoute>
      <div className="layout">
        <Topbar />
        <Sidebar />
        <div className="children">{children}</div>
      </div>
    </ProtectedRoute>
  );
}
