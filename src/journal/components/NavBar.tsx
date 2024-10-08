import { AccountCircle, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { JournalApp } from '../../JournalApp';

interface Props {
    drawerWidth: number,
    handleDrawerOpen: () => void;
    isOpen: boolean;
};

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const NavBar = ( { drawerWidth = 240, handleDrawerOpen, isOpen = false }: Props ) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({ theme }) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    marginLeft: drawerWidth,
                    width: `calc(100% - ${drawerWidth}px)`,
                    transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                    }),
                },
            },
        ],
    }));

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={ isOpen }>
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                        marginRight: 5,
                        },
                        isOpen && { display: 'none' },
                    ]}
                    >
                    <Menu />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar;