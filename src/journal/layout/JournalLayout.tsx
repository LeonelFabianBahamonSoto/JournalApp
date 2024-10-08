import { useState } from "react";

import {
    Box,
    styled,
    Typography,
    useTheme
} from "@mui/material";

import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

interface Props {
    children: React.ReactNode,
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: Props) => {

    const theme = useTheme();

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
            <Typography sx={{ marginBottom: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </Box>
        </Box>
    )
}

// <Box>
//     <CssBaseline />
    // <NavBar
    //     drawerWidth={ drawerWidth }
    //     handleDrawerOpen={ handleDrawerOpen }
    //     isOpen={ open }
    // />



//     {/* <h1>JournalLayout</h1> */}

//     <Box
//         component='main'
//         sx={{
//             flexGrow: 1,
//             p: 3,
//         }}
//     >
//         {/* Toobar */}

//         {/* { children } */}
//     </Box>
// </Box>