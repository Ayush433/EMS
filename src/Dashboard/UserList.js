import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import "./UserList.css";
import { useState } from "react";
import { userRows } from "../utils/dummyData";
import Layout from "../components/Layout";
import { toast } from "react-toastify";
export default function DataTable() {
  const [rows, setRows] = useState([
    {
      id: 1,
      firstName: "Anna Becker",
      email: "annabeck9999@gmail.com",
      position: "Software Engineer",
      age: 15,
    },
    { id: 2, firstName: "Ayush Adhikari", email: "ayush12@gmail.com", age: 15 },
    {
      id: 3,
      firstName: "Anna Becker",
      email: "an99@gmail.com",
      position: "Software Engineer",
      age: 15,
    },
    {
      id: 4,
      firstName: "Anna Becker",
      email: "ak9@gmail.com",
      position: "Software Engineer",
      age: 159,
    },
    {
      id: 5,
      firstName: "Anna Becker",
      email: "ayusaeck99@gmail.com",
      age: 135,
    },
    {
      id: 6,
      firstName: "Anna Becker",
      email: "annabssk9129@gmail.com",
      age: 135,
    },
    {
      id: 7,
      firstName: "Anna Becker",
      email: "annassbeck123@gmail.com",
      age: 15,
    },
  ]);

  const handleDelete = (id) => {
    setRows((prev) => prev.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "email", headerName: "Email", width: 130 },
    { field: "position", headerName: "Position", width: 130 },

    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/edit-profile"}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <Layout>
      <div class="wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="What are you looking for?"
          ></input>
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          disableSelectionOnClick
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
        <Link to={"/user"}>
          <button className="userList">Add Employee</button>
        </Link>
      </div>
    </Layout>
  );
}
