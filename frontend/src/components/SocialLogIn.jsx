import React from "react";

import "./SocialLogIn.css";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import QrCode2Icon from "@mui/icons-material/QrCode2";

const SocialLogIn = () => {
  return (
    <div className="social-login-container">
      <div className="title-social">Or Sign up with:</div>
      <div className="socials">
        <div className="google">
          <GoogleIcon />
        </div>
        <div className="facebook">
          <FacebookIcon />
        </div>
        <div className="twitter">
          <TwitterIcon />
        </div>
        <div className="qrCode">
          <QrCode2Icon />
        </div>
      </div>
    </div>
  );
};

export default SocialLogIn;
