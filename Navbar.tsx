import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { IconButton, Link } from "@mui/material";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

interface Properties {
  isDarkMode: boolean;
  handleModeChange: () => void;
}

export default function Navbar(props: Properties) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{}}>
            MSA
          </Typography>

          <Box
            sx={{
              ml: "auto",
              display: "flex",
              gap: "1rem",
              alignItem: "center",
            }}
          >
            <Link component={RouterLink} to={"/"}>
              MSA
            </Link>
            <Link component={RouterLink} to={"/table"}>
              Table
            </Link>
            <Link component={RouterLink} to={"/about"}>
              About
            </Link>

            <IconButton onClick={props.handleModeChange}>
              {props.isDarkMode ? (
                <LightModeOutlined />
              ) : (
                <DarkModeOutlined sx={{ color: "#1d0e40" }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
