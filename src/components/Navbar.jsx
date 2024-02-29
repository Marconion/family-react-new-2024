import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import { RightDrawer } from "./Drawer";
import { Link } from "react-router-dom";
import navLogoImg from "../components/assets/images/Family-logo-gold-white.png";

export const Navbar = () => {
  const StylizedToolbar = styled(Toolbar)({
    height: "50px",
    display: "flex",
    justifyContent: "space-between",
  });
  return (
    <AppBar position="sticky" sx={{ p: 1 }}>
      <StylizedToolbar>
        <Stack direction={"row"} alignItems={"center"}>
          {/* <RestaurantMenuIcon color="secondary" /> */}
          <Link to="/">
            <Button>
              <Box sx={{ marginTop: "10px" }}>
                <img style={{ height: "60px" }} src={navLogoImg} />
              </Box>
            </Button>
          </Link>
          <Typography variant="h7" sx={{ color: "#FBFADA", m: 1 }}>
            Family Event Place
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={3} alignItems={"center"}>
          <Stack
            sx={{
              display: { xs: "none", sm: "none", md: "block", lg: "block" },
            }}
            direction={"row"}
            spacing={3}>
            <Link to="/">
              <Button variant="outlined" color="secondary">
                {" "}
                Home
              </Button>
            </Link>
            <Link to="/onama">
              <Button variant="outlined" color="secondary">
                {" "}
                O nama
              </Button>
            </Link>
            <Link to="/galerija">
              <Button variant="outlined" color="secondary">
                {" "}
                Galerija
              </Button>
            </Link>
            <Link to="/kontakt">
              <Button variant="outlined" color="secondary">
                {" "}
                Kontakt
              </Button>
            </Link>
          </Stack>
          <RightDrawer />
        </Stack>
      </StylizedToolbar>
    </AppBar>
  );
};
