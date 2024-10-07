import {
    CSSObject,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    styled,
    Theme,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import { ChevronLeft, ChevronRight, Inbox, Mail } from '@mui/icons-material';
import MuiDrawer from '@mui/material/Drawer';

interface Props {
    drawerWidth: number,
    handleDrawerClose: () => void;
    isOpen: boolean;
};

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    width: drawerWidth,
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        variants: [
            {
                props: ({ open }) => open,
                style: {
                    ...openedMixin(theme),
                    '& .MuiDrawer-paper': openedMixin(theme),
                },
            },
            {
                props: ({ open }) => !open,
                style: {
                    ...closedMixin(theme),
                    '& .MuiDrawer-paper': closedMixin(theme),
                },
            },
        ],
    }),
);

const SideBar = ({
    drawerWidth = 240,
    handleDrawerClose,
    isOpen = false,
}: Props ) => {

    const theme = useTheme();

    return (
        <Drawer
            open={ isOpen }
            variant="permanent"
        >
            <DrawerHeader>

            <Toolbar>
                <Typography
                    noWrap
                    sx={{
                        bgcolor: 'pink',
                        textAlign: 'center',
                        width: '100%',
                    }}
                >
                    Fabian Bahamon Soto
                </Typography>
            </Toolbar>

            <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRight /> : <ChevronLeft />}
            </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={[
                            {
                                minHeight: 48,
                                px: 2.5,
                            },
                            isOpen
                                ? {
                                    justifyContent: 'initial',
                                }
                                : {
                                    justifyContent: 'center',
                                },
                            ]}
                        >
                            <ListItemIcon
                            sx={[
                                {
                                minWidth: 0,
                                justifyContent: 'center',
                                },
                                isOpen
                                ? {
                                    mr: 3,
                                    }
                                : {
                                    mr: 'auto',
                                    },
                            ]}
                            >
                                {index % 2 === 0 ? <Inbox /> : <Mail />}
                            </ListItemIcon>
                            <ListItemText
                            primary={text}
                            sx={[
                                isOpen
                                ? {
                                    opacity: 1,
                                    }
                                : {
                                    opacity: 0,
                                    },
                            ]}
                            />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default SideBar;