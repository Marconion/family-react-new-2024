import { Stack, Typography, Box, Button } from "@mui/material";
import React, { useState } from "react";
import { Divider } from "./Divider";
import { useEffect } from "react";
import ImageFadeIn from "./ImageFadeIn";
import { quotes } from "./Quotes";
import { Link } from "react-router-dom";
import familyVideo from "../components/assets/videos/Family-video.mp4";
import bwImage1 from "../components/assets/images/gallery-img/Family-11.jpg";
import bwImage2 from "../components/assets/images/gallery-img/Family-13.jpg";

export const Feed = () => {
  const [isVideoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or when the location changes
  }, []); // This effect runs only once when the component mounts

  let randomIndex = Math.floor(Math.random() * 5 + 1);

  const styles = {
    button: {
      padding: "10px 20px",
      marginBottom: "10px",
      color: "#12372A",
      "&:hover": { color: "#fbfada" },
      backgroundColor: "transparent",
      "&:hover": {
        backgroundColor: "#fbfada",
      },
    },
  };

  return (
    <div>
      <Stack
        spacing={5}
        textAlign={"center"}
        marginBottom={"6rem"}
        padding={"0.5rem"}
        alignItems={"center"}>
        <img
          src={bwImage1}
          alt="bwImage1"
          className="responsive-image"
          style={{
            position: "fixed",
            objectFit: "cover",
            // filter: "grayscale(50%)",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -39%)",
            // scale: "0.95",
            opacity: "0.15",
            zIndex: "-1",
            margin: "-2px",
          }}
        />
        <Box sx={{ padding: "0 30px" }}>
          <Divider />
          <Typography
            variant="h7"
            sx={{ fontStyle: "italic", animation: "fadeIn 2s" }}>
            "{quotes[randomIndex].quote}"
          </Typography>

          <Divider className={"custom-divider"} />
          <Stack marginBottom={"5rem"} alignItems={"center"}>
            <video
              className="responsive-video"
              autoPlay
              loop
              muted
              style={{ animation: "fadeIn 2s" }}>
              <source src={familyVideo} type="video/mp4" />
            </video>
          </Stack>
          <Link to="/kontakt">
            <Button
              sx={styles.button}
              variant="outlined"
              style={{
                marginBottom: "10px",
                // color: "#fbfada",
              }}>
              Rezervišite
            </Button>
          </Link>
        </Box>
      </Stack>
      <Stack sx={{ color: "secondary" }}>
        <div id="lokacija">
          <div style={{ textAlign: "center" }}>
            <h1 class="text-shadow-black">Naša lokacija</h1>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1734.1860874442618!2d20.435779728292133!3d44.74993840452094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7176a56fdde7%3A0xe5c162c5653e009b!2sFamily%20Event%20Place!5e0!3m2!1ssr!2srs!4v1682285491176!5m2!1ssr!2srs"
              style={{
                width: "100%",
                height: "500px",
                border: 0,
                allowfullscreen: "",
                loading: "lazy",
                referrerpolicy: "no-referrer-when-downgrade",
              }}></iframe>
            <p>
              Adresa: <br />
              Luke Vojvodića 18i <br />
              <br />
              Kontakt telefon: <br />
              064/90-60-064 <br />
              <br />
              E-mail adresa: <br />
              familyeventplace@gmail.com <br />
            </p>
          </div>
          <div class="social">
            <div>
              <p>Možete nas kontaktirati i klikom na linkove ispod</p>
            </div>
            <div class="social-media-links">
              <a href="https://www.facebook.com/your.family.event.place">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/family_eventplace/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="tel:0649060064">
                <i class="fa-solid fa-phone"></i>
              </a>
              <a href="mailto:familyeventplace@gmail.com">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </Stack>
    </div>
  );
};
