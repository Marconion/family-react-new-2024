import {
  Drawer,
  Typography,
  Box,
  IconButton,
  Stack,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Divider } from "./Divider";
import logo from "../components/assets/images/Logo uspravni sa poz.jpeg";

export const RightDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
          },
        }}
        onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon color="secondary"></MenuIcon>
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => {
          setIsDrawerOpen(false);
        }}>
        <Box p={2} width="160px" textAlign="center">
          <Typography variant="h6" marginBottom={"2rem"}>
            MENI
            <Divider />
          </Typography>
          <Stack spacing={3}>
            <Link to="/">
              <Button variant="text">Home</Button>
            </Link>
            <Link to="/onama">
              <Button variant="text">O nama</Button>
            </Link>
            <Link to="/galerija">
              <Button variant="text">Galerija</Button>
            </Link>
            <Link to="/ponuda">
              <Button variant="text">Ponuda</Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="text">Kontakt</Button>
            </Link>
            <Stack paddingTop={"60px"} alignItems={"center"}>
              <img height={"auto"} width={"110px"} src={logo} alt="logo" />
            </Stack>
            <Divider className={"custom-divider"} />
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};
