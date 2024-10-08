import { AccountCircle, Menu } from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
    drawerWidth: number,
    handleDrawerOpen: () => void;
    isOpen: boolean;
};

const NavBar = ( { drawerWidth = 240, handleDrawerOpen, isOpen = false }: Props ) => {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    ml: { sm: `${ drawerWidth }` },
                    width: { sm: isOpen ? `calc(100% - ${ drawerWidth }px)` : '95%' },
                }}
            >
                <Toolbar>
                    <IconButton
                        aria-label="menu"
                        color="inherit"
                        edge="start"
                        onClick={ handleDrawerOpen }
                        size="large"
                        sx={{
                            mr: 2,
                        }}
                        // sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        JournalApp
                    </Typography>

                    <Box sx={{ display: { xs: 'flex' } }}>
                        <IconButton
                        size="large"
                        aria-label="show more"
                        // aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        // onClick={handleMobileMenuOpen}
                        color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;