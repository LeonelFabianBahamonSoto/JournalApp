import { useState } from "react";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

import { Box, CssBaseline } from "@mui/material";

interface Props {
    children: React.ReactNode,
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {

    const [ open, setOpen ] = useState( false );

    const handleDrawerOpen = () => {
        setOpen( true );
    };

    const handleDrawerClose = () => {
        setOpen( false );
    };

    return (
        <Box>
            <CssBaseline />
            <NavBar
                drawerWidth={ drawerWidth }
                handleDrawerOpen={ handleDrawerOpen }
                isOpen={ open }
            />

            <SideBar
                drawerWidth={ drawerWidth }
                handleDrawerClose={ handleDrawerClose }
                isOpen={ open }
            />

            {/* <h1>JournalLayout</h1> */}

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
