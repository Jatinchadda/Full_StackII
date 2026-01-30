import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EventDetails from "./pages/EventDetails";
import MyEvents from "./pages/MyEvents";
import Feedback from "./pages/Feedback";

const theme = createTheme({
  palette: {
    primary: { main: "#1e88e5", light: "#42a5f5", dark: "#1565c0" },
    secondary: { main: "#ff5fab", light: "#ff80ab", dark: "#f50168" },
    success: { main: "#00bfa5" },
    background: { default: "#f5f7fa", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h4: { fontWeight: 700, letterSpacing: "-0.5px" },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    button: { fontWeight: 600, textTransform: "none" },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          boxShadow: "0 4px 12px rgba(30, 136, 229, 0.3)",
          transition: "all 0.3s ease",
          "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 20px rgba(30, 136, 229, 0.4)" },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          transition: "all 0.3s ease",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/event/:id" element={<EventDetails />} />
          <Route path="/myevents" element={<MyEvents />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
