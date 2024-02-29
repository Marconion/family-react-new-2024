import React from "react";
import { Navbar } from "./Navbar";
import {
  Typography,
  Stack,
  ImageList,
  ImageListItem,
  Button,
  useMediaQuery,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "./Footer";
import { useTheme } from "@mui/material/styles";
import { Divider } from "./Divider";
import velikaSalaImg from "../components/assets/images/gallery-img/Family-11.jpg";
import malaSalaImg from "../components/assets/images/gallery-img/Family-31.jpg";
import igraonicaImg from "../components/assets/images/gallery-img/Family-4.jpg";

export const Onama = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const direction = isSmallScreen ? "column" : "row";

  return (
    <div>
      <Navbar />
      <Stack flex={1} alignItems={"center"} m={5}>
        {/* <img
          style={{ width: "100%", padding: "2rem" }}
          src="./images/old divider swirl ornate floral.png"
        /> */}
        <Typography variant="h4" color={"#12372A"}>
          O nama
        </Typography>
        <Divider />
        <Typography variant="h8" textAlign={"center"}>
          Family event place je restoran namenjen organizovanju svih vrsta
          porodicnih proslava od 30 do 150 gostiju. U mogucnosti smo da
          organizujemo sve vrste proslava, od decijih rodjendana i krstenja do
          svadbi i korporativnih proslava.
          <br />
          <br />
          Smesten je na samoj ivici Kosutnjaka, na osuncanoj padini koja pruza
          fantastican pogled od kojeg zastaje dah.
          <br />
          <br />
          Family restoran je jedinstven prostor za slavlja u gradu jer Vam pruza
          mogucnost izbora u kakvom cete okruzenju organizovati vas svecani dan.
          <br />
          <br />
          Na raspolqganju su vam dve moderno opremljene zatvorene sale. Velika
          sala je kapaciteta do 100 gostiju, a mala sala je kapaciteta do 50
          gostiju. Sale su medjusobno povezane sto omogucava i organizaciju
          vecih  proslava do 150 gostiju.
          <br />
          <br />
          Ono sto vam je takodje na raspolaganju, a nas razlikuje od drugih
          ptostora ovog tipa su i otvorena terasa sa ocaravajucim pogledom na
          Avalu, kapaciteta do 50 gostiju. Kruna nase ponude je nasa zelena
          oaza, nas vrt, kapaciteta do 50 gostiju.
          <br />
          <br />
          Ovaj prostor je potpuno opremljen za hedonisticko uzivanje sa osecajem
          bega iz gradske vreve.
          <br />
          <br />
          Za najmladje i najbitnije goste Family event place je spremio posebno
          iznenadjenje. Na raspolaganju vam je potpuno opremljena decija
          igraonica od 70m2, sa profesionalnim animatorima koji ce im svaki
          trenutak proveden u nasem restoranu uciniti nezaboravnim.
        </Typography>
        <Divider />
        <Stack spacing={3} direction={direction}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 300 }} image={velikaSalaImg} title="img" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary">
                Velika sala
              </Typography>
              <Typography variant="body2" color="primary">
                Na raspolaganju su vam dve moderno opremljene zatvorene sale.
                Velika sala je kapaciteta do 100 gostiju, a mala sala je
                kapaciteta do 50 gostiju. Sale su medjusobno povezane sto
                omogućava i organizaciju većih proslava do 150 gostiju. Od
                ostalih prostora ovog tipa nas izdvaja otvorena terasa sa
                očaravajucim pogledom na Avalu, kapaciteta do 50 gostiju.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/galerija">
                <Button size="small">Galerija</Button>
              </Link>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 300 }} image={malaSalaImg} title="img" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary">
                Mala sala
              </Typography>
              <Typography variant="body2" color="primary">
                Kruna naše ponude je naša zelena oaza, naš vrt, kapaciteta do 50
                gostiju. Ovaj prostor je potpuno opremljen za hedonističko
                uživanje sa osećajem bega iz gradske vreve.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/galerija">
                <Button size="small">Galerija</Button>
              </Link>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 300 }} image={igraonicaImg} title="img" />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                color="primary">
                Igraonica
              </Typography>
              <Typography variant="body2" color="primary">
                Za najmladje i najbitnije goste Family event place je spremio
                posebno iznenadjenje. Na raspolaganju vam je potpuno opremljena
                dečija igraonica od 70m2, sa profesionalnim animatorima koji će
                im svaki trenutak proveden u našem restoranu učiniti
                nezaboravnim.
              </Typography>
            </CardContent>
            <CardActions>
              <Link to="/galerija">
                <Button size="small">Galerija</Button>
              </Link>
            </CardActions>
          </Card>
        </Stack>
        <Divider className={"custom-divider"} />
      </Stack>
      <Footer />
    </div>
  );
};
