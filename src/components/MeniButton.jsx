import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MeniButton = (props) => {
  return (
    <div className="button-pos">
      <Link to={props.link}>
        <Button
          variant="contained"
          style={{ color: "#FBFADA" }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          {props.text}
        </Button>
      </Link>
    </div>
  );
};
