import { ReactNode, useState } from "react";

import { Box } from "@mui/material";

import DrawerHeader from "../../components/atoms/Headers/DrawerHeader";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface Props {
    children: ReactNode,
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