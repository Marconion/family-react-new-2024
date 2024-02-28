import { Stack, Button, Typography } from "@mui/material";
import { ExpandCircleDown } from "@mui/icons-material";
import { useState, useEffect } from "react";

export const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);

    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <Stack alignItems={"center"}>
          <Button
            onClick={scrollToTop}
            variant="contained"
            color="secondary"
            style={{ position: "fixed", bottom: "60px", right: "60px" }}>
            <ExpandCircleDown sx={{ transform: "rotate(180deg)" }} />
            <Typography variant="h8" marginLeft={1}>
              Početak
            </Typography>
          </Button>
        </Stack>
      )}
    </div>
  );
};
