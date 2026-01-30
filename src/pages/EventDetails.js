import { useParams } from "react-router-dom";
import events from "../data/eventsData";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CalendarIcon from "@mui/icons-material/Event";
import LocationIcon from "@mui/icons-material/LocationOn";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function EventDetails() {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));
  const [open, setOpen] = useState(false);

  if (!event) return <Container sx={{ mt: 4 }}><Typography>Event not found</Typography></Container>;

  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Card 
        sx={{ 
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
          border: "1px solid rgba(30, 136, 229, 0.1)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
        }}
      >
        {event.image && (
          <CardMedia 
            component="img" 
            height="400" 
            image={event.image} 
            alt={event.title}
            sx={{ objectFit: "cover" }}
          />
        )}
        <CardContent sx={{ p: 4 }}>
          <Typography 
            variant="h3" 
            gutterBottom 
            sx={{ 
              fontWeight: 800, 
              mb: 2,
              background: "linear-gradient(135deg, #1e88e5 0%, #ff5fab 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {event.title}
          </Typography>
          
          <Box sx={{ display: "flex", gap: 2, mb: 3, flexWrap: "wrap" }}>
            <Chip 
              icon={<CalendarIcon />}
              label={event.date}
              sx={{ 
                backgroundColor: "rgba(30, 136, 229, 0.15)", 
                color: "#1e88e5",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}
            />
            <Chip 
              icon={<LocationIcon />}
              label={event.location}
              sx={{ 
                backgroundColor: "rgba(255, 90, 171, 0.15)", 
                color: "#ff5fab",
                fontWeight: 600,
                fontSize: "0.9rem"
              }}
            />
          </Box>
          
          <Typography 
            variant="body1" 
            sx={{ 
              whiteSpace: 'pre-line', 
              mb: 4, 
              lineHeight: 1.8,
              fontSize: "1.05rem",
              color: "#333"
            }}
          >
            {event.description}
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button 
              variant="contained" 
              size="large"
              onClick={() => setOpen(true)}
              startIcon={<CheckCircleIcon />}
              sx={{ 
                background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
                fontWeight: 700,
                px: 4,
                py: 1.5,
                transition: "all 0.3s ease",
                "&:hover": { 
                  transform: "translateY(-3px)",
                  boxShadow: "0 12px 24px rgba(30, 136, 229, 0.3)"
                }
              }}
            >
              Register Now
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                fontWeight: 700,
                px: 4,
                borderColor: "#ff5fab",
                color: "#ff5fab",
                transition: "all 0.3s ease",
                "&:hover": { 
                  backgroundColor: "rgba(255, 90, 171, 0.05)",
                  transform: "translateY(-3px)"
                }
              }}
            >
              Share Event
            </Button>
          </Box>
        </CardContent>
      </Card>

      <Snackbar 
        open={open} 
        autoHideDuration={4000} 
        message="🎉 You're registered! Check your email for details." 
        onClose={() => setOpen(false)}
        sx={{ 
          "& .MuiSnackbarContent-root": {
            backgroundColor: "#00bfa5",
            borderRadius: "12px",
            fontWeight: 600
          }
        }}
      />
    </Container>
  );
}

export default EventDetails;
