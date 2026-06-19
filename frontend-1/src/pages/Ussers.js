import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {

    try {

      const response =
        await API.get("/users");

      setUsers(response.data);

    } catch (error) {

      console.log(error);

    }
  };

  const deleteUser = async (id) => {

    try {

      await API.delete(`/users/${id}`);

      loadUsers();

    } catch (error) {

      console.log(error);

      alert("Delete Failed");

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-4">

        <div className="text-center mb-4">

          <h1 className="text-primary fw-bold">
            User Management
          </h1>

          <p className="text-muted">
            View and manage registered users
          </p>

        </div>

        <table className="table table-bordered table-striped">

          <thead className="table-primary">

            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {users.map(user => (

              <tr key={user.id}>

                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>

                <td>

                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() =>
                      deleteUser(user.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>
    </>
  );
}

export default Users;