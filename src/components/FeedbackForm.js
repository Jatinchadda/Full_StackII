import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SendIcon from "@mui/icons-material/Send";

function FeedbackForm() {
	const [name, setName] = useState("");
	const [message, setMessage] = useState("");
	const [rating, setRating] = useState(5);
	const [open, setOpen] = useState(false);

	function handleSubmit(e) {
		e.preventDefault();
		setOpen(true);
		setName("");
		setMessage("");
		setRating(5);
	}

	return (
		<Container sx={{ py: 6 }}>
			<Box sx={{ maxWidth: 720, mx: "auto" }}>
				<Card 
					sx={{ 
						background: "linear-gradient(135deg, #ffffff 0%, #f8f9fb 100%)",
						border: "1px solid rgba(30, 136, 229, 0.1)",
						boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
					}}
				>
					<CardContent sx={{ p: 4 }}>
						<Typography 
							variant="h4" 
							gutterBottom 
							sx={{ 
								fontWeight: 800,
								background: "linear-gradient(135deg, #1e88e5 0%, #ff5fab 100%)",
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								mb: 1
							}}
						>
							Share Your Feedback
						</Typography>
						<Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
							Help us improve your experience. Your feedback means a lot!
						</Typography>

						<Box component="form" onSubmit={handleSubmit}>
							<TextField 
								fullWidth 
								label="Your Name" 
								value={name} 
								onChange={(e) => setName(e.target.value)} 
								sx={{ mb: 2 }}
								placeholder="John Doe"
							/>
							
							<TextField 
								fullWidth 
								label="Your Message" 
								value={message} 
								onChange={(e) => setMessage(e.target.value)} 
								multiline 
								rows={5} 
								sx={{ mb: 2 }}
								placeholder="Tell us what you think..."
							/>

							<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, p: 2, backgroundColor: "rgba(30, 136, 229, 0.05)", borderRadius: "8px" }}>
								<Typography sx={{ fontWeight: 600 }}>Rate Your Experience</Typography>
								<Rating 
									value={rating} 
									onChange={(_, v) => setRating(v)}
									size="large"
									sx={{ "& .MuiRating-icon": { color: "#ff5fab" } }}
								/>
							</Box>

							<Button 
								type="submit" 
								variant="contained"
								fullWidth
								size="large"
								endIcon={<SendIcon />}
								sx={{ 
									background: "linear-gradient(135deg, #1e88e5 0%, #42a5f5 100%)",
									fontWeight: 700,
									py: 1.5,
									transition: "all 0.3s ease",
									"&:hover": { 
										transform: "translateY(-3px)",
										boxShadow: "0 12px 24px rgba(30, 136, 229, 0.3)"
									}
								}}
							>
								Send Feedback
							</Button>
						</Box>
					</CardContent>
				</Card>
			</Box>

			<Snackbar 
				open={open} 
				autoHideDuration={4000} 
				message="✨ Thanks for your feedback! We really appreciate it." 
				onClose={() => setOpen(false)}
				sx={{ 
					"& .MuiSnackbarContent-root": {
						backgroundColor: "#00bfa5",
						borderRadius: "12px",
						fontWeight: 600,
						fontSize: "0.95rem"
					}
				}}
			/>
		</Container>
	);
}

export default FeedbackForm;