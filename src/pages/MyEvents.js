import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import EmptyIcon from "@mui/icons-material/EventNote";

function MyEvents() {
  return (
    <Container sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>My Registered Events</Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>Track and manage all your registered events</Typography>
      
      <Card 
        sx={{ 
          textAlign: "center", 
          p: 4,
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
          border: "2px dashed rgba(30, 136, 229, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": { borderColor: "rgba(30, 136, 229, 0.6)" }
        }}
      >
        <Box sx={{ mb: 2 }}>
          <EmptyIcon sx={{ fontSize: 80, color: "rgba(30, 136, 229, 0.3)", mb: 2 }} />
        </Box>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>No Events Registered Yet</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Discover amazing events and register to join the community!
        </Typography>
        <Button 
          variant="contained" 
          href="/"
          sx={{ 
            background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
            fontWeight: 700,
            px: 3,
            transition: "all 0.3s ease",
            "&:hover": { 
              transform: "translateY(-3px)",
              boxShadow: "0 12px 24px rgba(30, 136, 229, 0.3)"
            }
          }}
        >
          Browse Events
        </Button>
      </Card>
    </Container>
  );
}

export default MyEvents;
