import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/ApiHandling")}
      >
        Api Handling
      </Button>
    </div>
  );
}
