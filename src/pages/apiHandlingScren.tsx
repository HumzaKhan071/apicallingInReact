// import material ui
import { Box, Button } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import axios from "axios";
import { useState } from "react";
import BaGrid from "./components/BaGrid";

function ApiHandlingScreen() {
  const [userList, setUserList] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const getApiData = () => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUserList([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };
  return (
    <Box>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="secondary"
        onClick={getApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Get API Data
      </Button>
      {/* <h1>User List</h1>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )} */}
      <BaGrid
        data={userList}
        loading={loading}
        button={(row: any) => (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              const updatedList = userList.filter(
                (user: any) => user.id !== row.id
              );
              setUserList(updatedList);
            }}
          >
            Delete
          </Button>
        )}
        gridCols={[
          {
            key: "id",
            value: "Id",
          },
          {
            key: "name",
            value: "Name",
          },
          {
            key: "username",
            value: "Username",
          },
          {
            key: "email",
            value: "Email",
          },
          {
            key: "delete",
            value: "Delete",
          },
        ]}
      />
    </Box>
  );
}

export default ApiHandlingScreen;
