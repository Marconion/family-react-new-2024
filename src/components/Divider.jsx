import { Stack } from "@mui/material";
import React from "react";
import "../App.css";
import dividerImg from "../components/assets/images/old divider swirl ornate floral.png";

export const Divider = (props) => {
  return (
    <Stack alignItems={"center"} className={props.className}>
      <img style={{ width: "80%", padding: "2rem" }} src={dividerImg} />
    </Stack>
  );
};
