import "./App.css";
import Login from "./components/LogIn";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import SocialLogIn from "./components/SocialLogIn";

function App() {
  return (
    <div className="container">
      <div className="title">Log in</div>
      <div className="login-container">
        <div className="login-form">
          <div className="login-form-icon">
            <Avatar src={<AccountCircleIcon fontSize="large" />} />
          </div>
          <Login />
          <SocialLogIn />
        </div>
      </div>
    </div>
  );
}

export default App;
