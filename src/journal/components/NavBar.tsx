import { Menu } from "@mui/icons-material";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";

interface Props {
    drawerWidth: number,
};

export const NavBar = ( { drawerWidth = 240 }: Props ) => {
    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    ml: { sm: `${ drawerWidth }` },
                    width: { sm: `calc(100% - ${ drawerWidth }px)` },
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}
