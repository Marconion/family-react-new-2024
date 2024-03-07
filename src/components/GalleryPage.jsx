import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import {
  Typography,
  Stack,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Grow,
  SwipeableDrawer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./Footer";
import ImageModal from "./EnlargeableImage";
import { Divider } from "./Divider";
import { ScrollButton } from "./ScrollButton";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";

export const GalleryPage = () => {
  const velikaSalaImages = [
    {
      img: "./images/gallery-img/New images/Family-slika-1.jpg",
      title: "img",
    },

    {
      img: "./images/gallery-img/New images/Family-slika-3.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-4.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-5.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-6.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-7.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-8.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-9.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-10.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-11.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-12.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-13.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-15.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-23.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-24.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-27.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-28.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-29.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-30.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-31.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-32.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-33.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-34.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-35.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-45.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-50.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-55.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-57.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-58.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-59.jpg",
      title: "img",
    },
    // {
    //   img: "./images/gallery-img/Family-7.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-8.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-9.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-10.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-11.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-12.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-13.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-14.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-18.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-19.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-20.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-21.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-22.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-23.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-24.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-34.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-25.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-26.jpg",
    //   title: "img",
    // },
    // {
    //   img: "./images/gallery-img/Family-27.jpg",
    //   title: "img",
    // },
  ];

  const malaSalaImages = [
    {
      img: "./images/gallery-img/Family-28.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-29.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-30.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-32.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-33.jpg",
      title: "img",
    },

    {
      img: "./images/gallery-img/Family-35.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-38.jpg",
      title: "img",
    },
  ];

  const igraonicaImages = [
    {
      img: "./images/gallery-img/New images/Family-slika-38.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-39.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-40.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-46.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-47.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-53.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-54.jpg",
      title: "img",
    },
  ];

  const hranaImages = [
    {
      img: "./images/gallery-img/New images/Family-slika-17.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-17.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-18.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-19.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-20.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-21.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-22.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-25.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-26.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-49.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-51.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-52.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/New images/Family-slika-56.jpg",
      title: "img",
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isSmallScreen ? 2 : 3;

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Navbar />

      <Stack flex={1} alignItems={"center"} m={5}>
        <Typography variant="h4" color={"#12372A"}>
          Galerija
        </Typography>
        <Divider />

        {/* VELIKA SALA */}
        <div id="velika-sala">
          <Stack margin={"30px 0 10px 0"} alignItems={"center"}>
            <Typography variant="h4">Velika sala</Typography>
          </Stack>
          <ImageList
            variant="quilted"
            cols={cols}
            gap={8}
            sx={{
              display: { md: "flexbox", lg: "flexbox" },
              margin: { md: "50px", lg: "50px" },
            }}>
            {velikaSalaImages.map((item) => (
              <Grow in timeout={1000}>
                <ImageListItem key={item.img}>
                  <ImageModal image={item.img} title={item.title} />
                </ImageListItem>
              </Grow>
            ))}
          </ImageList>
        </div>
        {/* MALA SALA */}
        <div id="mala-sala">
          <Stack margin={"30px 0 10px 0"} alignItems={"center"}>
            <Typography variant="h4">Mala sala</Typography>
          </Stack>
          <ImageList
            variant="quilted"
            cols={cols}
            gap={8}
            sx={{
              display: { md: "flexbox", lg: "flexbox" },
              margin: { md: "50px", lg: "50px" },
            }}>
            {malaSalaImages.map((item) => (
              <Grow in timeout={1000}>
                <ImageListItem key={item.img}>
                  <ImageModal image={item.img} title={item.title} />
                </ImageListItem>
              </Grow>
            ))}
          </ImageList>
        </div>

        {/* IGRAONICA */}
        <div id="igraonica">
          <Stack margin={"30px 0 10px 0"} alignItems={"center"}>
            <Typography variant="h4">Igraonica</Typography>
          </Stack>

          <ImageList
            variant="quilted"
            cols={cols}
            gap={8}
            sx={{
              display: { md: "flexbox", lg: "flexbox" },
              margin: { md: "50px", lg: "50px" },
            }}>
            {igraonicaImages.map((item) => (
              <Grow in timeout={1000}>
                <ImageListItem key={item.img}>
                  <ImageModal image={item.img} title={item.title} />
                </ImageListItem>
              </Grow>
            ))}
          </ImageList>
        </div>

        {/* HRANA */}
        <div id="igraonica">
          <Stack margin={"30px 0 10px 0"} alignItems={"center"}>
            <Typography variant="h4">Švedski sto</Typography>
          </Stack>

          <ImageList
            variant="quilted"
            cols={cols}
            gap={8}
            sx={{
              display: { md: "flexbox", lg: "flexbox" },
              margin: { md: "50px", lg: "50px" },
            }}>
            {hranaImages.map((item) => (
              <Grow in timeout={1000}>
                <ImageListItem key={item.img}>
                  <ImageModal image={item.img} title={item.title} />
                </ImageListItem>
              </Grow>
            ))}
          </ImageList>
        </div>
        <Divider className={"custom-divider"} />
      </Stack>
      <ScrollButton />
      <Footer />
    </div>
  );
};
