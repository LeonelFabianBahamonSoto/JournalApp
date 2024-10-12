import { Link } from "@mui/material";

import { Link as RouterLink } from "react-router-dom";

interface CustomLink {
    redirectTo: string,
    styles: string,
    title: string,
};

export const CustomLink = ({
    redirectTo,
    styles,
    title,
}: CustomLink) => {
    return (
        <Link
            component={ RouterLink }
            to={ redirectTo }
            sx={{
                fontSize: '18px',
                fontWeight: '600',
                textDecoration: 'underline',
            }}
        >
            { title }
        </Link>
    )
}
