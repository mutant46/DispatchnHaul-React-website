import { Typography, Button, Box, Chip } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

export const PTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.15rem",
  fontWeight: "normal",
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("sm")]: {
    marginTop: theme.spacing(2),
  },
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  color: "white",
  background: "black",
  marginTop: [theme.spacing(4)],
  padding: [theme.spacing(1.5, 7)],
  "&:hover": {
    background: "",
    backgroundColor: [theme.palette.primary.main],
    color: "white",
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: [theme.spacing(3)],
    padding: [theme.spacing(1.25, 5)],
  },
}));

export const PrimaryHeading = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

export const MarginLine = styled(Box)(({ theme }) => ({
  marginTop: [theme.spacing(18)],
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.down("md")]: {
    marginTop: [theme.spacing(3)],
  },
}));

export const BgHero = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundPosition: "top center",
  backgroundSize: "cover",
  minHeight: "500px",
  position: "relative",
}));

export const BgOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: alpha(theme.palette.secondary.main, 0.55),
}));

export const BgAntiOverlay = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  position: "absolute",
  right: "5%",
  top: "5%",
}));
