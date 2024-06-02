import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardMedia } from "@mui/material";

export default function SingleProduct() {
  const params = useParams();
  console.log(params.id);
  const [userList, setUserList] = useState<any>();
  const [loading, setLoading] = useState(false);
  const getStoreApiData = (id: any) => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((response) => {
        console.log(response.data);
        setUserList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setLoading(false);
    console.log("https://fakestoreapi.com/products/" + id);
  };

  return (
    <div>
      <h1>Single Product</h1>
      <button onClick={() => getStoreApiData(params.id)}>Get Data</button>

      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Card key={userList?.id} sx={{ margin: 1, maxWidth: 375 }}>
          <CardHeader title={userList?.id} />
          <CardMedia
            component="img"
            height="200"
            image={userList?.image}
            alt={userList?.title}
          />

          <CardContent>
            <h1>{userList?.title}</h1>
            <p>{userList?.price}</p>
            <p>{userList?.description}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
