import React, { useState } from "react";
import {
  Modal,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ImageFadeIn from "./ImageFadeIn";

const ImageModal = ({ image, title }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const width = isSmallScreen ? 350 : 550;

  return (
    <>
      <Card sx={{ maxWidth: 300, margin: "auto" }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
            title={title}
            sx={{
              objectFit: "cover",
              borderRadius: 0,
            }}
          />
        </CardActionArea>
      </Card>
      <div>
        {/* <img src={image} alt={title} onClick={handleOpen} /> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-image-title"
          aria-describedby="modal-image-description">
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 350,
              backgroundColor: "#12372A",
              border: "1px solid #12372A",
              padding: 5,
            }}>
            <Typography id="modal-image-title" variant="h6" component="h2">
              {/* {title} */}
            </Typography>
            <img
              src={image}
              alt={title}
              style={{ width: "100%", height: "auto", marginTop: 8 }}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ImageModal;
