import { Box } from "@mui/material";
import { NavBar } from "../components/NavBar";

interface Props {
    children: React.ReactNode,
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {
    return (
        <Box>
            <NavBar drawerWidth={ drawerWidth } />

            {/* SideBar */}

            <h1>JournalLayout</h1>

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                {/* Toobar */}

                {/* { children } */}
            </Box>
        </Box>
    )
}
