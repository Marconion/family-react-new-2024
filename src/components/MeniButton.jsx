import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MeniButton = (props) => {
  return (
    <div className="button-pos">
      <Button
        variant="contained"
        style={{ color: "#FBFADA" }}
        compnent={Link}
        to={props.link}
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>
        {props.text}
      </Button>
    </div>
  );
};
