import React from "react";
import {
  Typography,
  ImageList,
  Grow,
  ImageListItem,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageModal from "./EnlargeableImage";

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
export const ImageListComponent = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cols = isSmallScreen ? 2 : 3;

  return (
    <div>
      <Typography variant="h4">{props.title}</Typography>
      <ImageList
        variant="quilted"
        cols={cols}
        gap={8}
        sx={{
          display: { md: "flexbox", lg: "flexbox" },
          margin: { md: "50px", lg: "250px" },
        }}>
        {props.images.map((item) => (
          <Grow in timeout={1000}>
            <ImageListItem key={item.img}>
              <ImageModal image={item.img} title={item.title} />
            </ImageListItem>
          </Grow>
        ))}
      </ImageList>
    </div>
  );
};
