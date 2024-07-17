import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter, LinkedIn } from "@mui/icons-material";

const FooterContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
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
    <FooterContainer sx={{ backgroundColor: "#FFA500", borderRadius: '6px', overflow: 'hidden' }}>
      <Typography variant="body2">
        © 2024 DeerCook. All rights reserved.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 1 }}>
        <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
        <FooterLink href="/terms-of-service">Terms of Service</FooterLink>
        <FooterLink href="/contact">Contact Us</FooterLink>
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
