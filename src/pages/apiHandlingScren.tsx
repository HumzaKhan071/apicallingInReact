// import material ui
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import axios from "axios";
import { useState } from "react";
import BaGrid from "./components/BaGrid";
// import Row from bootstrap

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

  const postApiData = () => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        userId: 1,
        title: "Humza Khan",
        completed: false,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const putApiData = () => {
    setLoading(true);
    axios
      .put("https://jsonplaceholder.typicode.com/todos/1", {
        userId: 1,
        title: "Humza Khan",
        completed: false,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const deleteApiData = () => {
    setLoading(true);
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
  };

  const getStoreApiData = () => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
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
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="primary"
        onClick={postApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Post API Data
      </Button>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="success"
        onClick={putApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Put API Data
      </Button>
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="error"
        onClick={deleteApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Delete API Data
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

      {/* <h1>
        User List
        {loading == true ? "Loading..." : ""}
      </h1>

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
      /> */}
      {/* Store Get Api */}
      <Button
        variant="contained"
        startIcon={<AssignmentTurnedInIcon />}
        color="secondary"
        onClick={getStoreApiData}
        sx={{ margin: 1, textTransform: "capitalize" }}
      >
        Get Store API Data
      </Button>
      {/* <Table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4}>Loading...</td>
            </tr>
          ) : (
            userList.map((product: any) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table> */}

      {/* <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Description</TableCell>
              </TableRow>
            </TableHead>
            {loading ? (
              <TableRow>
                <TableCell colSpan={4}>Loading...</TableCell>
              </TableRow>
            ) : (
              userList.map((product: any) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.description}</TableCell>
                </TableRow>
              ))
            )}
          </Table>
        </TableContainer> */}
      {loading === true ? <h1>Loading</h1> : <h1>Data Posted</h1>}

      {userList.map((product: any) => (
        <Card
          key={product.id}
          sx={{ margin: 1, maxWidth: 375 }}
          style={{
            // i want to in row

            display: "inline-block",
          }}
        >
          <CardHeader title={product.id} />
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.title}
          />

          <CardContent>
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ApiHandlingScreen;
