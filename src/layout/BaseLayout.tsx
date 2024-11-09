import { Box, styled } from "@mui/material";

const BaseLayout = () => {
	return (
		<>
			<MainBlock>
				hello
			</MainBlock>
		</>
	);
};

export default BaseLayout;

const MainBlock = styled(Box)(({}) => ({
	width: "100%",
	maxWidth: "1550px",
	minWidth: "1200px",
	height: "100%",
	backgroundColor: "bisque",
}));
