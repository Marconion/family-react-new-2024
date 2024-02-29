import { Stack, Typography, Box } from "@mui/material";
import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { Divider } from "./Divider";
import { useEffect } from "react";
import "../App.css";

export const Kontakt = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts or when the location changes
  }, []); // This effect runs only once when the component mounts

  return (
    <div>
      <Stack sx={{ color: "secondary" }}>
        <div id="lokacija">
          <div style={{ textAlign: "center" }}>
            <Typography variant="h5">Naša lokacija</Typography>
          </div>
          {/* <Stack sx={{ margin: "0 0 20px 0" }}> */}
          <Divider className="divider" />
          {/* </Stack> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1734.1860874442618!2d20.435779728292133!3d44.74993840452094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7176a56fdde7%3A0xe5c162c5653e009b!2sFamily%20Event%20Place!5e0!3m2!1ssr!2srs!4v1682285491176!5m2!1ssr!2srs"
            style={{
              width: "75%",
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
          <Divider className="divider-1 custom-divider" />
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
      <Footer />
    </div>
  );
};
