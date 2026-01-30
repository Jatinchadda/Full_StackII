import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import EventIcon from "@mui/icons-material/Event";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 100%)",
        boxShadow: "0 4px 20px rgba(30, 136, 229, 0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", py: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <Badge badgeContent="+" color="secondary">
            <EventIcon sx={{ fontSize: 32 }} />
          </Badge>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/" 
            sx={{ 
              color: "inherit", 
              textDecoration: "none", 
              fontWeight: 700,
              fontSize: "1.3rem",
              letterSpacing: "-0.5px",
            }}
          >
            EventHub
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          <Button 
            color="inherit" 
            component={Link} 
            to="/" 
            sx={{ 
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", transform: "translateY(-2px)" }
            }}
          >
            🏠 Home
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/myevents" 
            sx={{ 
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", transform: "translateY(-2px)" }
            }}
          >
            ⭐ My Events
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/feedback" 
            sx={{ 
              fontSize: "0.95rem",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "rgba(255,255,255,0.1)", transform: "translateY(-2px)" }
            }}
          >
            💬 Feedback
          </Button>
          <Button 
            color="inherit" 
            component={Link} 
            to="/login" 
            sx={{ 
              fontSize: "0.95rem",
              fontWeight: 700,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderRadius: "8px",
              ml: 1,
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#ff5fab", transform: "translateY(-2px)" }
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
