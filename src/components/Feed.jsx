import { Stack, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { Divider } from "./Divider";
import { useEffect } from "react";
import ImageFadeIn from "./ImageFadeIn";
import logo from "../components/assets/images/Logo uspravni sa poz.jpeg";
import { quotes } from "./Quotes";
import { Navbar } from "./Navbar";
// import { RandomQuote } from "./Quotes";

export const Feed = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or when the location changes
  }, []); // This effect runs only once when the component mounts

  let randomIndex = Math.floor(Math.random() * 5 + 1);
  console.log(randomIndex);

  return (
    <div>
      <Stack
        spacing={5}
        textAlign={"center"}
        marginTop={"3rem"}
        marginBottom={"6rem"}
        padding={"0.5rem"}
        alignItems={"center"}>
        <Box sx={{ padding: "0 30px" }}>
          <Typography variant="h5">
            Dobrodošli na oficijalnu stranicu
          </Typography>
          <Divider />
        </Box>
        <ImageFadeIn src={logo} />
        <Divider />
        <Box maxWidth={"70%"}>
          <Typography variant="h6" sx={{ fontStyle: "italic" }}>
            "{quotes[randomIndex].quote}"
          </Typography>
        </Box>
        <Divider className={"custom-divider"} />
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
