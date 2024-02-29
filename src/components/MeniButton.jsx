import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export const MeniButton = () => {
  return (
    <div class="button-pos">
      <Link to="/ponuda">
        <Button
          variant="contained"
          style={{ color: "#FBFADA" }}
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}>
          Povratak na početak
        </Button>
      </Link>
    </div>
  );
};
