import { React, useRef } from "react";
import { Navbar } from "./Navbar";
import {
  Typography,
  Stack,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Grow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Footer } from "./Footer";
import ImageModal from "./EnlargeableImage";
import { Divider } from "./Divider";
import { ScrollButton } from "./ScrollButton";
import { useEffect } from "react";
// import { itemData } from "./galleryData";

export const GalleryPage = () => {
  const itemData = [
    {
      img: "./images/gallery-img/Family-1.jpg",
      title: "img",
    },

    {
      img: "./images/gallery-img/Family-7.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-8.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-9.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-10.jpg",
      title: "img",
    },

    {
      img: "./images/gallery-img/Family-15.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-16.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-17.jpg",
      title: "img",
    },

    {
      img: "./images/gallery-img/Family-36.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-37.jpg",
      title: "img",
    },
  ];

  const velikaSalaImages = [
    {
      img: "./images/gallery-img/Family-2.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-7.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-8.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-9.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-10.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-11.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-12.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-13.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-14.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-18.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-19.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-20.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-21.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-22.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-23.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-24.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-25.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-26.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-27.jpg",
      title: "img",
    },
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
      img: "./images/gallery-img/Family-34.jpg",
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
      img: "./images/gallery-img/Family-4.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-5.jpg",
      title: "img",
    },
    {
      img: "./images/gallery-img/Family-6.jpg",
      title: "img",
    },
  ];

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isSmallScreen ? 2 : 3;

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or when the location changes
  }, []); // This effect runs only once when the component mounts

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
        <Divider className={"custom-divider"} />
      </Stack>
      <ScrollButton />
      <Footer />
    </div>
  );
};
