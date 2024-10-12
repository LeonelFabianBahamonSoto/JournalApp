import { styled } from "@mui/material";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
    // necessary for content to be below app bar
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
}));

export default DrawerHeader;