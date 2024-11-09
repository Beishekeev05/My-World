import { Box, styled } from "@mui/material";

const BaseLayout = () => {
	return (
		<>
			<MainBlock>
				<header></header>
				<main>
					<aside></aside>
					<section></section>
				</main>
			</MainBlock>
		</>
	);
};

export default BaseLayout;

const MainBlock = styled(Box)(({ theme }) => ({
	width: "100%",
	maxWidth: "1550px",
	minWidth: "1200px",
	height: "100vh",
	backgroundColor: "bisque",
	border: "1px solid black",

	[theme.breakpoints.down("sm")]: {
		width: "100%",
		backgroundColor: "red",
		height: "100vh",
	},
}));
