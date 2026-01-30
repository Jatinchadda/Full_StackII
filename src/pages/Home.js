import events from "../data/eventsData";
import EventCard from "../components/EventCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 50%, #ff5fab 100%)",
          color: "white",
          py: 8,
          px: 2,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
            pointerEvents: "none",
          }
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 800, 
              mb: 2, 
              letterSpacing: "-1px",
              background: "linear-gradient(135deg, #ffffff 0%, #e0e0ff 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Discover Amazing Events
          </Typography>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: 300, fontSize: "1.2rem" }}>
            Join exciting gatherings, network with like-minded people, and create unforgettable memories
          </Typography>
          <Button 
            variant="contained" 
            size="large" 
            sx={{ 
              backgroundColor: "#ff5fab",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": { 
                backgroundColor: "#f50168", 
                transform: "translateY(-3px)",
                boxShadow: "0 12px 24px rgba(0,0,0,0.2)"
              }
            }}
          >
            Explore Events →
          </Button>
        </Container>
      </Box>

      {/* Events Grid */}
      <Container sx={{ mt: 6, mb: 6 }}>
        <Typography variant="h4" gutterBottom sx={{ mb: 1, fontWeight: 700 }}>Upcoming Events</Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Browse and register for the latest events happening around you
        </Typography>
        <Grid container spacing={3}>
          {events.map(event => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <EventCard event={event} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
