import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main, // Use the same color as the AppBar
  color: theme.palette.common.white,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius, // Add this line for rounded corners
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  "&:hover": {
    textDecoration: "underline",
  },
}));

const SocialMediaIcon = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  margin: theme.spacing(0, 1),
}));

const Footer = () => {
  return (
    <FooterContainer sx={{ backgroundColor: "#FFA500" }}>
      <Typography variant="body2">
        © 2024 DeerCook. All rights reserved.
      </Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 1 }}
      >
        <FooterLink
          href="/privacy-policy"
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
          }}
        >
          Privacy Policy
        </FooterLink>
        <FooterLink
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" }, // Optional hover effect
          }}
          href="/terms-of-service"
        >
          Terms of Service
        </FooterLink>
        <FooterLink
          sx={{
            color: "white",
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" }, // Optional hover effect
          }}
          href="/contact"
        >
          Contact Us
        </FooterLink>
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <SocialMediaIcon href="https://facebook.com">
          <Facebook />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://twitter.com">
          <Twitter />
        </SocialMediaIcon>
        <SocialMediaIcon href="https://linkedin.com">
          <LinkedIn />
        </SocialMediaIcon>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
