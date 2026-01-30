import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box 
      sx={{ 
        background: "linear-gradient(135deg, #1e88e5 0%, #1565c0 50%, #ff5fab 100%)",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: 4
      }}
    >
      <Container maxWidth="sm">
        <Card 
          sx={{ 
            p: 4,
            background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
            boxShadow: "0 20px 60px rgba(30, 136, 229, 0.3)",
            borderRadius: "16px"
          }}
        >
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box 
              sx={{ 
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 64,
                height: 64,
                background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
                borderRadius: "16px",
                mb: 2
              }}
            >
              <LockIcon sx={{ fontSize: 32, color: "white" }} />
            </Box>
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Welcome Back</Typography>
            <Typography variant="body2" color="text.secondary">
              Sign in to your EventHub account
            </Typography>
          </Box>

          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              sx={{ 
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  "&:hover": { borderColor: "#1e88e5" },
                  "&.Mui-focused": { boxShadow: "0 0 0 3px rgba(30, 136, 229, 0.1)" }
                }
              }}
            />

            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              sx={{ 
                "& .MuiOutlinedInput-root": {
                  transition: "all 0.3s ease",
                  "&:hover": { borderColor: "#1e88e5" },
                  "&.Mui-focused": { boxShadow: "0 0 0 3px rgba(30, 136, 229, 0.1)" }
                }
              }}
            />

            <FormControlLabel
              control={<Checkbox />}
              label="Remember me"
              sx={{ mt: 1, mb: 2 }}
            />

            <Button 
              type="submit"
              fullWidth
              variant="contained"
              size="large"
              sx={{ 
                background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
                fontWeight: 700,
                py: 1.5,
                mb: 2,
                transition: "all 0.3s ease",
                "&:hover": { 
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 24px rgba(30, 136, 229, 0.3)"
                }
              }}
            >
              Sign In
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Typography variant="body2" color="text.secondary">
                Don't have an account? {" "}
                <Link 
                  href="#" 
                  sx={{ 
                    fontWeight: 700, 
                    color: "#ff5fab",
                    transition: "all 0.2s ease",
                    "&:hover": { color: "#f50168" }
                  }}
                >
                  Create one
                </Link>
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}

export default Login;
