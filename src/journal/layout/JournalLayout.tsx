import { useState } from "react";

import {
    Box,
    styled,
} from "@mui/material";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface Props {
    children: React.ReactNode,
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {

    const [ open, setOpen ] = useState( false );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const handleDrawerOpen = () => {
        setOpen( true );
    };

    const handleDrawerClose = () => {
        setOpen( false );
    };

    return (
        <Box sx={{ display: 'flex' }}>
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

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                { ( children ) && children }
            </Box>
        </Box>
    )
}