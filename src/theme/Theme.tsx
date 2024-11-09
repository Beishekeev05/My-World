import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const theme = createTheme();

interface ThemeProps {
	children: ReactNode;
}

const Theme = ({ children }: ThemeProps) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
