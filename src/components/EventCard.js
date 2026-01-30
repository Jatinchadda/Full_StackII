import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import CalendarIcon from "@mui/icons-material/Event";
import LocationIcon from "@mui/icons-material/LocationOn";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <Card 
      sx={{ 
        mb: 3, 
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
        transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        border: "1px solid rgba(30, 136, 229, 0.1)",
        "&:hover": { 
          transform: "translateY(-12px) scale(1.02)", 
          boxShadow: "0 20px 40px rgba(30, 136, 229, 0.25)",
          borderColor: "rgba(30, 136, 229, 0.3)",
        }
      }}
    >
      {event.image && (
        <Box sx={{ position: "relative", overflow: "hidden", height: 200 }}>
          <CardMedia 
            component="img" 
            height="200" 
            image={event.image} 
            alt={event.title}
            sx={{ 
              objectFit: "cover",
              transition: "transform 0.4s ease",
              "&:hover": { transform: "scale(1.08)" }
            }}
          />
          <Chip 
            label="Popular" 
            sx={{ 
              position: "absolute", 
              top: 12, 
              right: 12,
              background: "linear-gradient(135deg, #ff5fab 0%, #f50168 100%)",
              color: "white",
              fontWeight: 700,
            }} 
          />
        </Box>
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 0.5 }}>{event.title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5 }}>
          {event.description?.slice(0, 100)}{event.description?.length > 100 ? '…' : ''}
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          <Chip 
            icon={<CalendarIcon />}
            label={event.date} 
            size="small"
            sx={{ backgroundColor: "rgba(30, 136, 229, 0.1)", color: "#1e88e5" }}
          />
          <Chip 
            icon={<LocationIcon />}
            label={event.location}
            size="small"
            sx={{ backgroundColor: "rgba(255, 90, 171, 0.1)", color: "#ff5fab" }}
          />
        </Box>
      </CardContent>
      <CardActions sx={{ pt: 0 }}>
        <Button 
          size="small" 
          variant="contained" 
          component={Link} 
          to={`/event/${event.id}`}
          sx={{ background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)" }}
        >
          View Details
        </Button>
        <Button size="small" color="secondary">⭐ Add</Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;
