import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="Contact">Contact</Link>
        </li>
        <li>
          <Link to="ApiHandling">ApiHandling</Link>
        </li>
      </ul>
    </div>
  );
}
